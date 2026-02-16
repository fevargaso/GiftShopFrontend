import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@app/core/models/product-model';
import { CartService } from '@app/core/services/cart.services';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule],
  templateUrl: './add-to-cart-button.component.html',
})
export class AddToCartButtonComponent implements OnInit, OnDestroy {
  @Input() product!: Product;
  isAdded = false;
  issuccess = false;
  private cartSub?: Subscription;

  constructor(private cartService: CartService) {}

ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(items => {
      if (this.product) {
        this.isAdded = items.some(item => item.product.id === this.product.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
  }

  add(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    if (this.product && !this.issuccess) { 
      this.cartService.addToCartProduct(this.product);
      
      this.issuccess = true;

      setTimeout(() => {
        this.issuccess = false;
      }, 2000);
    }
  }
}
