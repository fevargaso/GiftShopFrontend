import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '@app/core/services/product.services';
import { CartService } from '@app/core/services/cart.services';
import { Product } from '@app/core/models/product-model';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  isAdded = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

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

addToCart(): void {
  if (this.product) {
    this.cartService.addToCartProduct(this.product);
    this.isAdded = true;
    setTimeout(() => this.isAdded = false, 2000);
}
}
}