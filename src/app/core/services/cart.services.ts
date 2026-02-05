import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product-model';
import { NotificationUtilService } from '../utils/notification-util.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private notification: NotificationUtilService) {}

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

    this.cartSubject.next(this.cartItems);
  }

    addToCart(item: CartItem) {
    const current = this.cartSubject.value;
    this.cartSubject.next([...current, item]);
  }

  increaseQuantity(productId: string): void {
    const item = this.cartItems.find(
      i => i.product.id === productId
    );

    if (!item) return;

    item.quantity++;
    this.cartSubject.next(this.cartItems);
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
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter(
      i => i.product.id !== productId
    );

    this.notification.warn('Producto eliminado del carrito');
    this.cartSubject.next(this.cartItems);
  }

  clearCart(): void {
    this.cartItems = [];
    this.notification.info('Carrito vacío');
    this.cartSubject.next(this.cartItems);
  }
}
