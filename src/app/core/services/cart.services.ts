import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product-model';
import { NotificationUtilService } from '../utils/notification-util.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'giftshop_cart';
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor(private notification: NotificationUtilService) {
    this.loadCart();
  }

  private loadCart(): void {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next(this.cartItems);
    }
  }

  private saveCart(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  addToCartProduct(product: Product): void {
    const item = this.cartItems.find(
      i => i.product.id === product.id
    );

    if (item) {
      item.quantity++;
      this.notification.info('Cantidad actualizada en el carrito 🛒');
    } else {
      this.cartItems.push({
        product,
        quantity: 1
      });
      this.notification.success('Producto agregado al carrito ✅');
    }

    this.saveCart();
  }

  increaseQuantity(productId: string): void {
    const item = this.cartItems.find(
      i => i.product.id === productId
    );

    if (!item) return;

    item.quantity++;
    this.saveCart();
  }

  decreaseQuantity(productId: string): void {
    const item = this.cartItems.find(
      i => i.product.id === productId
    );

    if (!item) return;

    if (item.quantity === 1) {
      this.removeFromCart(productId);
      return;
    }

    item.quantity--;
    this.saveCart();
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter(
      i => i.product.id !== productId
    );

    this.notification.warn('Producto eliminado del carrito');
    this.saveCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.notification.info('Carrito vacío');
    this.saveCart();
  }

  getTotal(): number {
    return this.cartItems
      .reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

    get items(): CartItem[] {
    return this.cartItems;
  }
}
