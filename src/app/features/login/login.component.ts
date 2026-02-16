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
    
    const credentials = {
      email: this.validateForm.value.email, 
      password: this.validateForm.value.password
    };

    this.authService.login(credentials).subscribe({
      next: (user) => {
        this.loading = false;
        this.message.success(`Welcome`);
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (err) => {
        this.loading = false;
        this.message.error('incorrect email or password');
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