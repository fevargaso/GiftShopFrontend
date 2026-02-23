import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '@app/core/services/product.services';
import { Product } from '@app/core/models/product-model';
import { AddToCartButtonComponent } from '@app/shared/components/add-to-cart-button/add-to-cart-button.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, AddToCartButtonComponent, NzIconModule, NzSpinModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  product?: Product;

  ngOnInit(): void {
    const state = window.history.state;
    if (state?.product) {
      this.product = state.product;
      return;
    }
    this.loadProductFromApi();
  }

  private loadProductFromApi(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.productService.getById(id).subscribe({
      next: res => (this.product = res),
      error: err => console.error('Error loading product details:', err),
    });
  }
}
