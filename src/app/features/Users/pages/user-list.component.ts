import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';

import { UserService } from '@app/core/services/user.service';
import { SharedModule } from '@shared/shared.module';
import { User, UserQueryParams } from '@app/core/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private readonly userService = inject(UserService);
  private readonly store = inject(Store<{ user: any }>);
  private readonly modalService = inject(NzModalService);

  users: User[] = [];
  loading = false;
  totalItems = 0;

  isVisible = false;
  isEdit = false;

  currentUser: Partial<User> & { password?: string } = {};

  params: UserQueryParams = {
    page: 1,
    pageSize: 10,
    search: '',
  };

  isAdmin$ = this.store.select('user').pipe(
    map(state => state?.roles?.includes('Admin'))
  );


ngOnInit(): void {
  this.isAdmin$
    .pipe(take(1))
    .subscribe(isAdmin => {
      console.log('Is Admin:', isAdmin);
      if (isAdmin) {
        this.loadUsers();
      }
    });
}


loadUsers(): void {
  this.loading = true;

  this.userService.getAllUsers(this.params).subscribe({
    next: (response: any) => {
      console.log('RESPONSE:', response);

      this.users = response.data;    
      this.totalItems = response.total; 

      this.loading = false;
    },
    error: () => {
      this.users = [];
      this.loading = false;
    }
  });
}



  onSearchChange(value: string): void {
    this.params.search = value;
    this.params.page = 1;
    this.loadUsers();
  }

  onRoleChange(value: string): void {
    this.params.role = value;
    this.params.page = 1;
    this.loadUsers();
  }

  onPageSizeChange(value: number): void {
    this.params.pageSize = value;
    this.loadUsers();
  }

  onPageIndexChange(value: number): void {
    this.params.page = value;
    this.loadUsers();
  }


  showModal(user?: User): void {
    this.isVisible = true;

    if (user) {
      this.isEdit = true;
      this.currentUser = { ...user };
    } else {
      this.isEdit = false;
      this.currentUser = {
        name: '',
        email: '',
        role: 'User'
      };
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {

    if (!this.currentUser.name || !this.currentUser.email) return;

    this.loading = true;

    const payload = this.buildPayload();

    const request$ = this.isEdit
      ? this.userService.updateUser(payload as User)
      : this.userService.registerUser(payload);

    request$.subscribe({
      next: () => {
        this.resetAfterSave();
      },
error: (err: HttpErrorResponse) => {
  console.error('Request error:', err.message);
  this.loading = false;
}
    });
  }

  private buildPayload(): any {
    const base = {
      name: this.currentUser.name,
      email: this.currentUser.email,
      role: this.currentUser.role || 'User'
    };

    if (this.isEdit) {
      return {
        ...base,
        id: this.currentUser.id
      };
    }

    return {
      ...base,
      password: this.currentUser.password
    };
  }

  private resetAfterSave(): void {
    this.isVisible = false;
    this.loading = false;
    this.currentUser = {};
    this.loadUsers();
  }


  deleteUser(id: string): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to delete this user?',
      nzContent: '<b style="color: red;">This action is permanent.</b>',
      nzOkText: 'Yes, Delete',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.userService.deleteUser(id).subscribe({
          next: () => this.loadUsers(),
          error: (err) => console.error(err)
        });
      }
    });
  }
}
