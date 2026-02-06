import { Component, Input } from "@angular/core";
import { Product } from "@app/core/models/product-model";
import { CartService } from "@app/core/services/cart.services";

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

addToCart(): void {
  if (this.product) {
    this.cartService.addToCartProduct(this.product);
  }
}
}
