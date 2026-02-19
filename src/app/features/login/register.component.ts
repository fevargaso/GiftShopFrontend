import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/core/services/auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    NzFormModule, 
    NzInputModule, 
    NzButtonModule, 
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private message = inject(NzMessageService);
  private authService = inject(AuthService); 

  loading = false;
  formError = false;

  validateForm = this.fb.group({
    name: ['', [
      Validators.required, 
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]],
    email: ['', [
      Validators.required, 
      Validators.email, 
      Validators.maxLength(255)
    ]],
    password: ['', [
      Validators.required, 
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/)
    ]],
    confirm: ['', [Validators.required]]
  });

  submitForm(): void {
    if (this.validateForm.invalid) {
      this.markFieldsDirty();
      this.message.warning('Please complete all fields correctly');
      this.triggerShake(); 
      return;
    }

    const { name, email, password, confirm } = this.validateForm.getRawValue();
    if (password !== confirm) {
      this.message.error('Passwords do not match');
      this.triggerShake();
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
        this.triggerShake(); 
        
        if (err.status === 400 && err.error?.errors) {
          const firstError = Object.values(err.error.errors)[0] as string[];
          this.message.error(firstError[0] || 'Validation error');
        } else {
          this.message.error(err.error?.message || 'Error creating account');
        }
      }
    });
  }

  private triggerShake(): void {
    this.formError = true;
    setTimeout(() => {
      this.formError = false;
    }, 400);
  }

  private markFieldsDirty(): void {
    Object.values(this.validateForm.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }
}