import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@app/core/models/product-model';
import { ProductService } from '@app/core/services/product.services';
import { SharedModule } from '@app/shared/shared.module';
import { Router } from '@angular/router';
import { AddToCartButtonComponent } from '@app/shared/components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, AddToCartButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private readonly productsService = inject(ProductService);
  private readonly router = inject(Router);

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts({ page: 1, pageSize: 6 }).subscribe({
      next: result => {
        this.products = (result.items ?? []).map((p: any) => ({
          ...p,
          imageUrl: p.imageUrl || p.ImageUrl
        })).slice(0, 6);
      },
      error: err => console.error('Error getting products:', err)
    });
  }

  scrollToProducts(): void {
    document.getElementById('products-target')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  goToProductsPage(): void {
    this.router.navigate(['/products']);
  }

  seeDetails(product: Product): void {
    this.router.navigate(
      ['/products', product.id],
      { state: { product } }
    );
  }
}
