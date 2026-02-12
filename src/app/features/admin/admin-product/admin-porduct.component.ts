import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RouterLink, Router } from "@angular/router";
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ProductService } from '@app/core/services/product.services';
import { Product } from '@app/core/models/product-model';
import { CategoryService } from '@app/core/services/category.service';

@Component({
  standalone: true,
  selector: 'app-admin-products',
  imports: [
    CommonModule, FormsModule, NzTableModule, NzButtonModule,
    NzModalModule, NzFormModule, NzInputModule, NzIconModule, NzSelectModule,
    NzTagModule, NzDividerModule, RouterLink
  ],
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: any[] = [];
  
  params = {
    search: '',
    category: '', 
    page: 1,
    pageSize: 10
  };

  private searchSubject = new Subject<string>();
  private searchSubscription?: Subscription;

  isVisible = false;
  isCategoryVisible = false;
  isEdit = false;
  totalItems = 0;


  currentProduct: Partial<Product> = this.resetProduct();
  newCategory = { name: '', description: '' };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();

    this.searchSubscription = this.searchSubject.pipe(
      debounceTime(400), 
      distinctUntilChanged() 
    ).subscribe(value => {
      this.params.search = value;
      this.params.page = 1;
      this.loadProducts();
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

 
  onSearchChange(value: string): void {
    this.searchSubject.next(value);
  }

  onCategoryChange(categoryId: string | null): void {
    this.params.category = categoryId || ''; 
    this.params.page = 1; 
    this.loadProducts();
  }

  onPageIndexChange(index: number): void {
    this.params.page = index;
    this.loadProducts();
  }

  onPageSizeChange(size: number): void {
    this.params.pageSize = size;
    this.params.page = 1;
    this.loadProducts();
  }

  // --- Carga de Datos ---
  loadProducts() {
    this.productService.getProducts(this.params).subscribe({
      next: (res: any) => {
        this.products = res.items || [];
        this.totalItems = res.totalItems ?? res.totalCount ?? 0;
      },
      error: () => this.message.error('Error loading products')
    });
  }

  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.error('Error loading categories', err)
    });
  }


  showModal(product?: Product): void {
    if (product) {
      this.isEdit = true;

      this.currentProduct = { ...product };
    } else {
      this.isEdit = false;
      this.currentProduct = this.resetProduct();
    }
    this.isVisible = true;
  }

  showCategoryModal(): void {
    this.newCategory = { name: '', description: '' };
    this.isCategoryVisible = true;
  }

handleOk(): void {
  if (!this.currentProduct.name || !this.currentProduct.price) {
    this.message.warning('Name and Price are required');
    return;
  }
  let request$: import('rxjs').Observable<any>;

  if (this.isEdit) {
    request$ = this.productService.update(this.currentProduct.id!, this.currentProduct);
  } else {
    request$ = this.productService.create(this.currentProduct);
  }

  request$.subscribe({
    next: () => {
      this.message.success(this.isEdit ? 'Product updated' : 'Product created');
      this.finalizeOperation();
    },
    error: (err: any) => { 
      console.error(err);
      this.message.error('Error saving product');
    }
  });
}

  handleCategoryOk(): void {
    if (!this.newCategory.name) {
      this.message.warning('Category name is required');
      return;
    }
    this.categoryService.create(this.newCategory).subscribe({
      next: () => {
        this.message.success('Category created');
        this.loadCategories();
        this.isCategoryVisible = false;
      },
      error: () => this.message.error('Error creating category')
    });
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isCategoryVisible = false;
  }


  private finalizeOperation() {
    this.loadProducts();
    this.isVisible = false;
  }

  private resetProduct() {
    return { 
      name: '', 
      price: 0, 
      description: '', 
      imageUrl: '', 
      categoryId: undefined 
    };
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.currentProduct.imageUrl = reader.result as string;
        input.value = ''; 
      };
      reader.readAsDataURL(file);
    }
  }

  deleteProduct(id: string) { 
    this.modal.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'This action cannot be undone',
      nzOkDanger: true,
      nzOnOk: () => {
        this.productService.delete(id).subscribe(() => {
          this.message.info('Deleted successfully');
          this.loadProducts();
        });
      }
    });
  }
}