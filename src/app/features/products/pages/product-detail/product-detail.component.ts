import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '@app/core/services/product.services';
import { CartService } from '@app/core/services/cart.services';
import { Product } from '@app/core/models/product-model';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NzButtonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

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
        error: (err) => console.error('Error al cargar el detalle', err)
      });
    }
  }
}

addToCart(): void {
  if (this.product) {
    this.cartService.addToCartProduct(this.product);
  }
}
}