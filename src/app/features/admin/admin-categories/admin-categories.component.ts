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
    const nameToSave = this.currentCategory.name?.trim().toLowerCase();

    if (!nameToSave) {
      this.message.error('The name is required.');
      return;
    }

    const isDuplicate = this.categories.some(cat => 
      cat.name.trim().toLowerCase() === nameToSave && 
      cat.id !== this.currentCategory.id 
    );

    if (isDuplicate) {
      this.message.error('There is already a category with this name');
      return;
    }

    if (this.isEdit) {
      this.categoryService.update(this.currentCategory.id!, this.currentCategory).subscribe(() => {
        this.message.success('Category updated');
        this.finalizeAction();
      });
    } else {
      this.categoryService.create(this.currentCategory).subscribe(() => {
        this.message.success('Category created');
        this.finalizeAction();
      });
    }
  }

  private finalizeAction(): void {
    this.loadCategories();
    this.isVisible = false;
  }

  checkDuplicate(): boolean {
  if (!this.currentCategory.name) return false;
  
  const name = this.currentCategory.name.trim().toLowerCase();
  return this.categories.some(cat => 
    cat.name.trim().toLowerCase() === name && 
    cat.id !== this.currentCategory.id
  );
}

deleteCategory(id: string) {
  const category = this.categories.find(c => c.id === id);
  const categoryName = category ? category.name : 'this category';

  this.modal.confirm({
    nzTitle: `Are you sure you want to delete category "${categoryName}"?`,
    nzContent: `<b style="color: red;">CRITICAL WARNING!</b><br>
                If you delete this category, <b>all linked products</b> will become orphaned or may be deleted depending on system configuration. 
                <br><br>Do you wish to proceed anyway?`,
    nzOkText: 'Yes, delete all',
    nzOkType: 'primary',
    nzOkDanger: true,
    nzCancelText: 'Cancel',
    nzOnOk: () => {
      this.categoryService.delete(id).subscribe({
        next: () => {
          this.message.warning('Category and its links deleted successfully');
          this.loadCategories();
        },
        error: (err) => {
          if (err.status === 400 || err.status === 409) {
            this.message.error('Cannot be deleted: This category has active products..');
          } else {
            this.message.error('Error while trying to delete the category');
          }
        }
      });
    }
  });
}
}