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


@Component({
  standalone: true,
  selector: 'app-admin-products',
  imports: [
    CommonModule, FormsModule, NzTableModule, NzButtonModule, 
    NzModalModule, NzFormModule, NzInputModule, NzIconModule, NzSelectModule
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
    private message: NzMessageService
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
      this.totalItems = res.totalCount || 0;
    });
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.loadProducts();
  }

  loadCategories() {
  this.categoryService.getAll().subscribe({
    next: (res) => this.categories = res,
    error: (err) => console.error('Error cargando categorías', err)
  });
}

  showModal(product?: Product): void {
    this.isVisible = true;
    if (product) {
      this.isEdit = true;
      this.currentProduct = { ...product };
    } else {
      this.isEdit = false;
      this.currentProduct = this.resetProduct();
    }
  }

handleOk(): void {
  if (this.isEdit) {
    this.productService.update(this.currentProduct.id!, this.currentProduct).subscribe({
      next: () => {
        this.message.success('Producto actualizado');
        this.finalizeOperation();
      },
      error: (err) => this.message.error('Error al actualizar')
    });
  } else {
    this.productService.create(this.currentProduct).subscribe({
      next: (newId) => {
        this.message.success('Producto creado');
        this.finalizeOperation();
      },
      error: (err) => this.message.error('Error al crear')
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
      this.message.warning('El nombre de la categoría es obligatorio');
      return;
    }

    this.categoryService.create(this.newCategory).subscribe({
      next: () => {
        this.message.success('Categoría creada correctamente');
        this.isCategoryVisible = false;
        this.loadCategories(); 
      },
      error: (err) => {
        this.message.error('Error al crear la categoría');
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
      nzTitle: '¿Estás seguro de eliminar este producto?',
      nzOkText: 'Eliminar',
      nzOkDanger: true,
      nzOnOk: () => {
        this.productService.delete(id).subscribe(() => {
          this.message.info('Producto eliminado');
          this.loadProducts();
        });
      }
    });
  }
}