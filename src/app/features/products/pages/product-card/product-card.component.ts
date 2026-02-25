import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Product } from '@app/core/models/product-model';
import { AddToCartButtonComponent } from '@app/shared/components/add-to-cart-button/add-to-cart-button.component';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule, RouterLink, AddToCartButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  constructor(private router: Router) {}

  seeDetails(product: Product): void {
    this.router.navigate(['/products', product.id], {
      state: { product },
    });
  }
}
