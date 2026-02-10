import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProductService } from '@app/core/services/product.services';
import { Product } from '@app/core/models/product-model';
import { CategoryService } from '@app/core/services/category.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-admin-products',
  imports: [
    CommonModule, FormsModule, NzTableModule, NzButtonModule,
    NzModalModule, NzFormModule, NzInputModule, NzIconModule, NzSelectModule,
    RouterLink
],
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})

export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  categories: any[] = [];
  isVisible = false;
  isCategoryVisible = false;
  isEdit = false;

  totalItems = 0;
  pageSize = 10;
  pageIndex = 1;

currentProduct: Partial<Product> = this.resetProduct();

  newCategory = {
    name: '',
    description: ''
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    const params = {
      page: this.pageIndex,
      pageSize: this.pageSize
    };
    this.productService.getProducts(params).subscribe(res => {
      this.products = res.items || [];
      this.totalItems = res.totalItems ?? res.totalCount ?? 0;

      this.pageIndex = res.page ?? this.pageIndex;
      this.pageSize = res.pageSize ?? this.pageSize;
    });
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.loadProducts();
  }

  loadCategories() {
  this.categoryService.getAll().subscribe({
    next: (res) => this.categories = res,
    error: (err) => console.error('Error loading categories', err)
  });
}

goToCategories(): void {
  this.router.navigate(['/admin/categories']);
}

  showModal(product?: Product): void {
    this.isVisible = true;
    if (product) {
      this.isEdit = true;
      this.currentProduct = { ...product };
    } else {
      this.isEdit = false;
      this.currentProduct = { imageUrl: ''};
    }
  }

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  
  if (input.files && input.files[0]) {
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    
    reader.onload = () => {
      this.currentProduct.imageUrl = reader.result as string;
      input.value = '';
    };

    reader.readAsDataURL(file);
  }
}

handleOk(): void {
  if (this.isEdit) {
    this.productService.update(this.currentProduct.id!, this.currentProduct).subscribe({
      next: () => {
        this.message.success('Product updated');
        this.finalizeOperation();
      },
      error: (err) => this.message.error('Error updating product')
    });
  } else {
    this.productService.create(this.currentProduct).subscribe({
      next: (newId) => {
        this.message.success('Product created');
        this.finalizeOperation();
      },
      error: (err) => this.message.error('Error creating product')
    });
  }
}

private finalizeOperation() {
  this.loadProducts();
  this.isVisible = false;
  this.currentProduct = this.resetProduct();
}

private resetProduct() {
    return {
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      categoryId: ''
    };
  }

  showCategoryModal(): void {
    this.newCategory = { name: '', description: '' }; 
    this.isCategoryVisible = true;
  }

  handleCategoryOk(): void {
    if (!this.newCategory.name) {
      this.message.warning('The category name is required');
      return;
    }

    this.categoryService.create(this.newCategory).subscribe({
      next: () => {
        this.message.success('Category created successfully');
        this.isCategoryVisible = false;
        this.loadCategories(); 
      },
      error: (err) => {
        this.message.error('Error creating category');
        console.error(err);
      }
    });
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isCategoryVisible = false;
  }

  deleteProduct(id: string) { 
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete this product?',
      nzOkText: 'Delete',
      nzOkDanger: true,
      nzOnOk: () => {
        this.productService.delete(id).subscribe(() => {
          this.message.info('Product deleted');
          this.loadProducts();
        });
      }
    });
  }
}