import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/core/services/auth.service'; // Asegúrate de que la ruta sea correcta

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
  private authService = inject(AuthService); // Inyectamos el servicio real

  loading = false;

  validateForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required]]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      const { name, email, password, confirm } = this.validateForm.value;
      
      if (password !== confirm) {
        this.message.error('Las contraseñas no coinciden');
        return;
      }

      this.loading = true;
      
  
      const command = { name, email, password };


      this.authService.register(command).subscribe({
        next: (response) => {
          this.loading = false;
          this.message.success('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.loading = false;
          const errorMsg = err.error?.message || 'Error al crear la cuenta. Inténtalo de nuevo.';
          this.message.error(errorMsg);
        }
      });
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}