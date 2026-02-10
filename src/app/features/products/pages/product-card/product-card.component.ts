import { Component, Input } from "@angular/core";
import { Product } from "@app/core/models/product-model";
import { CartService } from "@app/core/services/cart.services";
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    RouterLink
  ]
})
export class ProductCardComponent {
  @Input() product!: Product;
  isAdded = false;

  constructor(private cartService: CartService) {}

addToCart(): void {
  if (this.product) {
    this.cartService.addToCartProduct(this.product);
    this.isAdded = true;
    setTimeout(() => this.isAdded = false, 2000);
  }
}
}
