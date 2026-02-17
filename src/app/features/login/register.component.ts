import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, RouterModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private message = inject(NzMessageService);
  private authService = inject(AuthService); 

  loading = false;

  validateForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required]]
  });

  submitForm(): void {
    if (!this.validateForm.valid) {
      this.markFieldsDirty();
      return;
    }

    const { name, email, password, confirm } = this.validateForm.getRawValue();

    if (password !== confirm) {
      this.message.error('Passwords do not match');
      return;
    }

    this.loading = true;
    this.authService.register({ name, email, password }).subscribe({
      next: () => {
        this.loading = false;
        this.message.success('Account successfully created! You can now log in.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        const errorMsg = err.error?.message || 'Error creating account. Please try again.';
        this.message.error(errorMsg);
      }
    });
  }

  private markFieldsDirty(): void {
    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}