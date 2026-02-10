import { Component, Input } from "@angular/core";
import { Product } from "@app/core/models/product-model";
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AddToCartButtonComponent } from "@app/shared/components/add-to-cart-button/add-to-cart-button.component";


@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    AddToCartButtonComponent
  ]
})
export class ProductCardComponent {
  @Input() product!: Product;
}