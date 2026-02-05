import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '@app/core/services/product.services';
import { Product } from '@app/core/models/product-model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
    NzIconModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  totalItems = 0;
  
  private searchSubject = new Subject<string>();
  private searchSubscription?: Subscription;

  params = {
    search: '',
    category: '',
    page: 1,
    pageSize: 9
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();

    this.searchSubscription = this.searchSubject.pipe(
      debounceTime(400), 
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.params.search = searchText;
      this.params.page = 1;
      this.loadProducts();
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

loadProducts() {
  this.productService.getProducts(this.params).subscribe({
    next: (res: any) => {
      this.products = res.items || []; 
      this.totalItems = res.totalCount || 0;
      
      console.log('Datos cargados:', this.products.length, 'Total en DB:', this.totalItems);
    },
    error: (err) => console.error('Error cargando productos', err)
  });
}

  onFilterChange() {
    this.searchSubject.next(this.params.search);
  }

  onPageChange(page: number) {
    console.log('Page changed to:', page);
    this.params.page = page;
    this.loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}