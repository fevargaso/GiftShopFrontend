import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CategoryService } from '@app/core/services/category.service';
import { Category } from '@app/core/models/category.model';

@Component({
  standalone: true,
  selector: 'app-admin-categories',
  imports: [
    CommonModule, FormsModule, NzTableModule, NzButtonModule, 
    NzModalModule, NzFormModule, NzInputModule
  ],
  templateUrl: './admin-categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {
  categories: Category[] = [];
  isVisible = false;
  isEdit = false;

  currentCategory: Partial<Category> = {
    name: '',
    description: ''
  };

  constructor(
    private categoryService: CategoryService,
    private modal: NzModalService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res;
    });
  }

  showModal(category?: Category): void {
    this.isVisible = true;
    if (category) {
      this.isEdit = true;
      this.currentCategory = { ...category };
    } else {
      this.isEdit = false;
      this.currentCategory = { name: '', description: '' };
    }
  }

  handleOk(): void {
    if (this.isEdit) {
      this.categoryService.update(this.currentCategory.id!, this.currentCategory).subscribe(() => {
        this.message.success('Categoría actualizada');
        this.loadCategories();
        this.isVisible = false;
      });
    } else {
      this.categoryService.create(this.currentCategory).subscribe(() => {
        this.message.success('Categoría creada');
        this.loadCategories();
        this.isVisible = false;
      });
    }
  }

  deleteCategory(id: string) {
    this.modal.confirm({
      nzTitle: '¿Eliminar categoría?',
      nzContent: 'Ten en cuenta que esto podría afectar a los productos asociados.',
      nzOkDanger: true,
      nzOnOk: () => {
        this.categoryService.delete(id).subscribe(() => {
          this.message.warning('Categoría eliminada');
          this.loadCategories();
        });
      }
    });
  }
}