import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalService } from 'ng-zorro-antd/modal'; 
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '@app/core/services/cart.services';
import { CartDrawerService } from '@app/core/services/cart-drawer.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule, NzDrawerModule, NzButtonModule, NzIconModule, NzBadgeModule],
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss']
})
export class CartDrawerComponent implements OnInit, OnDestroy {
  isCartVisible = false;
  cartItems = this.cartService.items;
  private sub = new Subscription();

  total$ = this.cartService.cart$.pipe(map(() => this.cartService.getTotal()));

  constructor(
    private cartService: CartService,
    private drawerSvc: CartDrawerService,
    private router: Router,
    private modal: NzModalService 
  ) {}

  ngOnInit(): void {
    this.sub.add(this.drawerSvc.open$.subscribe(v => (this.isCartVisible = v)));
    this.sub.add(this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  openCart() { this.drawerSvc.open(); }
  closeCart() { this.drawerSvc.close(); }

  increaseQuantity(item: any) { this.cartService.increaseQuantity(item.product.id); }
  decreaseQuantity(item: any) { this.cartService.decreaseQuantity(item.product.id); }
  removeFromCart(productId: string) { this.cartService.removeFromCart(productId); }

  calculateTotal(): number { return this.cartService.getTotal(); }

  goToCartPage() {
    this.closeCart();
    this.router.navigateByUrl('/cart');
  }

goToCheckout() {
    const user = localStorage.getItem('loggedUser');

    if (user) {
      this.closeCart();
      this.router.navigateByUrl('/cart'); 
    } else {
      this.showLoginRequiredModal();
    }
  }

  private showLoginRequiredModal(): void {
    this.modal.confirm({
      nzTitle: 'Confirmación requerida',
      nzContent: 'Para proceder con la compra y finalizar tu pedido, necesitas iniciar sesión o registrarte.',
      nzOkText: 'Iniciar Sesión',
      nzCancelText: 'Continuar viendo',
      nzCentered: true,
      nzOnOk: () => {
        this.closeCart();
        this.router.navigate(['/login'], { 
          queryParams: { returnUrl: '/cart' } 
        });
      }
    });
  }
}