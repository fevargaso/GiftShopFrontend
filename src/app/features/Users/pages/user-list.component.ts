import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '@app/core/services/user.service';
import { map, take } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    private userService = inject(UserService);
    private store = inject(Store);
    private modalService = inject(NzModalService);

    users: any[] = [];
    loading = false;
    totalItems = 0;
    isVisible = false;
    isEdit = false;
    currentUser: any = {};

    params = {
        page: 1,
        pageSize: 10,
        search: '',
        role: null as string | null
    };

    isAdmin$ = this.store.select('user').pipe(
        map(state => state.roles?.includes('Admin'))
    );

    ngOnInit(): void {
        this.isAdmin$.pipe(take(1)).subscribe(isAdmin => {
            if (isAdmin) {
                this.loadUsers();
            }
        });
    }


    loadUsers(): void {
        this.loading = true;
        this.userService.getAllUsers(this.params).subscribe({
            next: (response: any) => {
                this.users = response.data || response;
                this.totalItems = response.total || response.length;
                this.loading = false;
            },
            error: () => {
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

    showModal(user?: any): void {
        this.isVisible = true;
        if (user) {
            this.isEdit = true;
            const userId = user.id || user.Id;
            this.currentUser = { ...user, id: userId };

        } else {
            this.isEdit = false;
            this.currentUser = { name: '', email: '', role: 'User', active: true };
        }
    }

    handleCancel(): void {
        this.isVisible = false;
    }

handleOk(): void {
    if (!this.currentUser.name || !this.currentUser.email) return;

    this.loading = true;

    const payload: any = {
        Name: this.currentUser.name,
        Email: this.currentUser.email,
        Role: this.currentUser.role || 'User' 
    };

    if (this.isEdit) {
        payload.Id = this.currentUser.id;
    } else {
        payload.Password = this.currentUser.password;
    }


    const request$ = this.isEdit
        ? this.userService.updateUser(payload)
        : this.userService.registerUser(payload);

    request$.subscribe({
        next: () => {
            this.isVisible = false;
            this.loading = false;
            this.loadUsers();
            this.currentUser = {};
        },
        error: (err) => {
            console.error("Request error:", err);
            this.loading = false;
        }
    });
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