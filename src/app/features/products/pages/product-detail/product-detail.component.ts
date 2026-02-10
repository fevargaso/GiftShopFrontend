import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '@app/core/services/product.services';
import { Product } from '@app/core/models/product-model';
import { AddToCartButtonComponent } from '@app/shared/components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, AddToCartButtonComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const navigation = window.history.state;

    if (navigation && navigation.product) {
      this.product = navigation.product;
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.productService.getById(id).subscribe({
          next: (res) => this.product = res,
          error: (err) => console.error('Error loading details', err)
        });
      }
    }
  }
}