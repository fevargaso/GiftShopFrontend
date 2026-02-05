import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/core/services/cart.services';
import { CartItem } from '@app/core/models/cart-item.model';
import { NotificationUtilService } from '@app/core/utils/notification-util.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NzButtonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private notification: NotificationUtilService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increase(item: CartItem): void {
    this.cartService.increaseQuantity(item.product.id);
    this.notification.success('Product quantity increased');
  }

  decrease(item: CartItem): void {
    if (item.quantity === 1) {
      this.remove(item.product.id);
      return;
    }

    this.cartService.decreaseQuantity(item.product.id);
    this.notification.info('Product quantity decreased');
  }

  remove(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.notification.warn('Product removed from cart');
  }

    clear(): void {
    this.cartService.clearCart();
  }

getTotal(): number {
  const total = this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  return Math.round(total * 100) / 100;
}
}
