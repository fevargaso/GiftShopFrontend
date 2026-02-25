import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product-model';
import { NotificationUtilService } from '../utils/notification-util.service';
import { UserState } from '../auth/user.store';
import { Role } from '../auth/roles';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly store = inject(Store<{ user: UserState }>);
  private readonly notification = inject(NotificationUtilService);

  private readonly GUEST_KEY = 'giftshop_cart_guest';

  private storageKey = this.GUEST_KEY;
  private cartItems: CartItem[] = [];

  private readonly cartSubject = new BehaviorSubject<CartItem[]>([]);
  readonly cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCartFromStorage();

    this.store.select('user').subscribe(user => {
      this.handleUserTransition(user);
    });
  }

  private handleUserTransition(user: UserState): void {
    const isRegistered = !!user?.id && user.actualRole !== Role.UNAUTHORIZE;

    const newKey = isRegistered ? `giftshop_cart_${user.id}` : this.GUEST_KEY;

    if (this.storageKey === newKey) return;

    if (this.storageKey === this.GUEST_KEY && isRegistered) {
      this.mergeGuestCartToUser(newKey);
    } else {
      this.storageKey = newKey;
      this.loadCartFromStorage();
    }
  }

  private mergeGuestCartToUser(userKey: string): void {
    const guestItems = [...this.cartItems];

    this.storageKey = userKey;

    const savedUserCartJson = localStorage.getItem(this.storageKey);
    let userSavedItems: CartItem[] = savedUserCartJson ? JSON.parse(savedUserCartJson) : [];

    guestItems.forEach(gItem => {
      const existing = userSavedItems.find(u => u.product.id === gItem.product.id);

      if (existing) {
        existing.quantity += gItem.quantity;
      } else {
        userSavedItems.push(gItem);
      }
    });

    this.cartItems = userSavedItems;

    this.saveCartToStorage();

    localStorage.removeItem(this.GUEST_KEY);
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
    const existing = this.cartItems.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity++;
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
