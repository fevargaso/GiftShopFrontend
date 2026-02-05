import { Component, inject } from '@angular/core';
import { ExampleModel } from '@app/core/models/example.model';
import { Product } from '@app/core/models/product-model';
import { ProductService } from '@app/core/services/product.services';
import { CartService } from '@app/core/services/cart.services';
import { SharedModule } from '@app/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly productsService = inject(ProductService);
  private readonly cartService = inject(CartService);

  examples: ExampleModel[] = [];
  products: Product[] = [];

  ngOnInit() {
    this.productsService.getProducts({ page: 1, pageSize: 10 }).subscribe({
      next: (result) => {
        this.products = result.items || [];
      },
      error: (err) => {
        console.error('Error getting products: ', err);
      }
    });
  }

  addToCart(product: Product): void {
    console.log('Producto enviado al carrito:', product);
    this.cartService.addToCartProduct(product);
  }
}
