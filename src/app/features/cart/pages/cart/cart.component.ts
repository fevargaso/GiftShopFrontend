import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Se mantienen ambos: uno para el tipo/inyector y otro para el standalone
import { CommonModule } from '@angular/common';
import { CartService } from '@app/core/services/cart.services';
import { CartItem } from '@app/core/models/cart-item.model';
import { NotificationUtilService } from '@app/core/utils/notification-util.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NzButtonModule, RouterModule, NzIconModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  isProcessing = false;

  constructor(
    private cartService: CartService,
    private notification: NotificationUtilService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increase(item: CartItem): void {
    this.cartService.increaseQuantity(item.product.id);
  }

  decrease(item: CartItem): void {
    if (item.quantity === 1) {
      this.remove(item.product.id);
    } else {
      this.cartService.decreaseQuantity(item.product.id);
    }
  }

  remove(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.notification.warn('Product removed from cart');
  }

  clear(): void {
    this.cartService.clearCart();
    this.notification.info('Cart cleared');
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  processCheckout(): void {
    if (this.cartItems.length === 0) return;

    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.router.navigate(['/orders']);
    }, 700);
  }
}
