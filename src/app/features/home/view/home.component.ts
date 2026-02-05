import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@app/core/models/product-model';
import { ProductService } from '@app/core/services/product.services';
import { CartService } from '@app/core/services/cart.services';
import { SharedModule } from '@app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly productsService = inject(ProductService);
  public cartService = inject(CartService);
  private router = inject(Router);
  products: Product[] = [];
  isCartVisible = false;

  get cartItems() {
    return this.cartService.items || [];
  }

  ngOnInit() {
    this.productsService.getProducts({ page: 1, pageSize: 10 }).subscribe({
      next: (result) => {
        this.products = (result.items || []).slice(0, 6);
      },
      error: (err) => {
        console.error('Error getting products: ', err);
      }
    });
  }

  scrollToProducts(): void {
    const element = document.getElementById('products-target');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToProductsPage(): void {
    this.router.navigate(['/products']);
  }

  openCart(): void {
    this.isCartVisible = true;
  }

  increaseQuantity(item: any): void {
  item.quantity++;
}

decreaseQuantity(item: any): void {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    this.removeFromCart(item.product.id);
  }
}

  verDetalle(producto: any): void {
    this.router.navigate(['/product-detail', producto.id], { 
      state: { product: producto } 
    });
  }

  closeCart(): void {
    this.isCartVisible = false;
  }

  handleVisibleChange(visible: boolean): void {
  this.isCartVisible = visible;
}

  addToCart(product: Product): void {
    this.cartService.addToCartProduct(product);
  }

removeFromCart(productId: any): void {
  const index = this.cartItems.findIndex((item: any) => item.product.id === productId);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
}

  goToCartPage(): void {
  this.closeCart(); 
  this.router.navigate(['/cart']); 
}

calculateTotal(): number {
   const items = this.cartService.items;
    if (!items || items.length === 0) return 0;
    return items.reduce((acc, item) => {
      const price = item.product?.price || 0;
      const qty = item.quantity || 1;
      return acc + (price * qty);
    }, 0);
}
}
