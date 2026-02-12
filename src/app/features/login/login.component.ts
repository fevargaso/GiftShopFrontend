import { Component, inject, OnInit } from '@angular/core'; 
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AuthService } from '@app/core/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute); 
  private message = inject(NzMessageService);

  loading = false;
  returnUrl: string = '/home'; 

  validateForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  goToRegister(): void {
    this.router.navigate(['/register']); 
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loading = true;
      
      this.authService.login(this.validateForm.value).subscribe({
        next: (user) => {
          this.loading = false;
          this.message.success(`Bienvenido, ${user.name}`);
          
          this.router.navigateByUrl(this.returnUrl)
            .then((navigated) => {
              if (navigated) {
                window.location.reload();
              } else {
                this.router.navigate(['/home']).then(() => window.location.reload());
              }
            })
            .catch(() => {
              this.router.navigate(['/']).then(() => window.location.reload());
            });
        },
        error: (err) => {
          this.loading = false;
          const errorMsg = err.error?.message || 'Credenciales incorrectas';
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