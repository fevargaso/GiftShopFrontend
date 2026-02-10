import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@app/core/models/product-model';
import { ProductService } from '@app/core/services/product.services';
import { CartService } from '@app/core/services/cart.services';
import { SharedModule } from '@app/shared/shared.module';
import { Router } from '@angular/router';
import { CartItem } from '@app/core/models/cart-item.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private readonly productsService = inject(ProductService);
  public readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  products: Product[] = [];
  isCartVisible = false;
  isAdded = false;

  get cartItems(): CartItem[] {
    return this.cartService.items;
  }

  ngOnInit(): void {
    this.productsService.getProducts({ page: 1, pageSize: 6 }).subscribe({
      next: result => {
        this.products = (result.items ?? []).slice(0, 6);
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

  openCart(): void {
    this.isCartVisible = true;
  }

  closeCart(): void {
    this.isCartVisible = false;
  }

  handleVisibleChange(visible: boolean): void {
    this.isCartVisible = visible;
  }

  addToCart(product: Product): void {
    this.cartService.addToCartProduct(product);
    this.isAdded = true;
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.increaseQuantity(item.product.id);
  }

  decreaseQuantity(item: CartItem): void {
    this.cartService.decreaseQuantity(item.product.id);
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  goToCartPage(): void {
    this.closeCart();
    this.router.navigate(['/cart']);
  }

  calculateTotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }

  seeDetails(product: Product): void {
    this.router.navigate(
      ['/products', product.id],
      { state: { product } }
    );
  }
}
