import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product-model';
import { NotificationUtilService } from '../utils/notification-util.service';
import { UserState } from '../auth/user.store'; 
import { Role } from '../auth/roles';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private store = inject(Store<{ user: UserState }>);
  private notification = inject(NotificationUtilService);

  private storageKey = 'giftshop_cart_guest'; 
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  
  cart$ = this.cartSubject.asObservable();

  constructor() {

    this.loadCartFromStorage();

    this.store.select('user').subscribe((user) => {
      this.handleUserTransition(user);
    });
  }

  private handleUserTransition(user: UserState) {
    const isRegistered = user?.id && user.actualRole !== Role.UNAUTHORIZE;
    const newKey = isRegistered ? `giftshop_cart_${user.id}` : 'giftshop_cart_guest';

    if (this.storageKey === newKey) return;

    if (this.storageKey === 'giftshop_cart_guest' && isRegistered) {
      this.mergeGuestCartToUser(newKey);
    } 
    else {
      this.storageKey = newKey;
      this.loadCartFromStorage();
    }
  }

  private mergeGuestCartToUser(userKey: string) {
    const guestItems = [...this.cartItems];

    this.storageKey = userKey;

    const savedUserCartJson = localStorage.getItem(this.storageKey);
    let userSavedItems: CartItem[] = savedUserCartJson ? JSON.parse(savedUserCartJson) : [];

    guestItems.forEach(gItem => {
      const exists = userSavedItems.find(u => u.product.id === gItem.product.id);
      if (exists) {
        exists.quantity += gItem.quantity; 
      } else {
        userSavedItems.push(gItem); 
      }
    });

    this.cartItems = userSavedItems;
    this.saveCartToStorage();
    
    localStorage.removeItem('giftshop_cart_guest'); 
  }


  private loadCartFromStorage(): void {
    const saved = localStorage.getItem(this.storageKey);
    this.cartItems = saved ? JSON.parse(saved) : [];
    this.cartSubject.next([...this.cartItems]);
  }

  private saveCartToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    this.cartSubject.next([...this.cartItems]);
  }


  addToCartProduct(product: Product): void {
    const index = this.cartItems.findIndex(i => i.product.id === product.id);

    if (index > -1) {
      this.cartItems[index] = { 
        ...this.cartItems[index], 
        quantity: this.cartItems[index].quantity + 1 
      };
    } else {
      this.cartItems.push({ product, quantity: 1 });
      this.notification.success('Product added to cart');
    }
    this.saveCartToStorage();
  }

  increaseQuantity(productId: string): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (!item) return;
    item.quantity++;
    this.saveCartToStorage();
  }

  decreaseQuantity(productId: string): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (!item) return;
    if (item.quantity === 1) {
      this.removeFromCart(productId);
      return;
    }
    item.quantity--;
    this.saveCartToStorage();
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter(i => i.product.id !== productId);
    this.notification.warn('Product removed from cart');
    this.saveCartToStorage();
  }

  clearCart(): void {
    this.cartItems = [];
    this.notification.info('Cart cleared');
    this.saveCartToStorage();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  get items(): CartItem[] {
    return this.cartItems;
  }
}