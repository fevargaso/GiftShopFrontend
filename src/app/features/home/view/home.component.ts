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
    this.loadFeaturedProducts();
  }

  private loadFeaturedProducts(): void {
    this.productsService.getProducts({ page: 1, pageSize: 5 }).subscribe({
      next: result => {
        const items = result.items ?? [];
        this.products = items.map((p: any) => ({
          ...p,
          imageUrl: p.imageUrl || p.ImageUrl
        }));
      },
      error: err => console.error('Error getting products:', err)
    });
  }

  scrollToProducts(): void {
    document.getElementById('products-target')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  goToProductsPage(): void {
    this.router.navigate(['/products']);
  }

  seeDetails(product: Product): void {
    this.router.navigate(['/products', product.id], { 
      state: { product } 
    });
  }
}