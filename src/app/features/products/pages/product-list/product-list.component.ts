import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '@app/core/services/product.services';
import { CategoryService } from '@app/core/services/category.service';
import { Product } from '@app/core/models/product-model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button'; // Agregado para el botón de búsqueda
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CartService } from '@app/core/services/cart.services';
import { AddToCartButtonComponent } from '@app/shared/components/add-to-cart-button/add-to-cart-button.component';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductCardComponent,
    NzSelectModule,
    NzInputModule,
    NzPaginationModule,
    NzIconModule,
    NzButtonModule,
    AddToCartButtonComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: any[] = []; 
  totalItems = 0;
  viewMode: 'list' = 'list';

  private searchSubject = new Subject<string>();
  private searchSubscription?: Subscription;

  params = {
    search: '',
    category: '',
    page: 1,
    pageSize: 6
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService, 
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadCategories(); 
    this.loadProducts();

    this.searchSubscription = this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.params.search = searchText;
      this.loadProducts();
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.error('Error loading categories', err)
    });
  }

  loadProducts(): void {
    this.productService.getProducts(this.params).subscribe({
      next: (res: any) => {
        this.products = res.items || [];
        this.totalItems = res.totalItems ?? res.totalCount ?? 0;
      },
      error: err => console.error('Error loading products', err)
    });
  }

  onSearchChange(): void {
    this.params.page = 1; 
    this.searchSubject.next(this.params.search);
  }

  onFilterChange(): void {
    this.params.page = 1;
    this.loadProducts();
  }

  onPageChange(page: number): void {
    this.params.page = page;
    this.loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}