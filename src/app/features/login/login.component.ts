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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute); 
  private message = inject(NzMessageService);

  loading = false;
  private returnUrl = '/home'; 

  validateForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loading = true;
      const credentials = this.validateForm.getRawValue();

      this.authService.login(credentials).subscribe({
        next: () => {
          this.loading = false;
          this.message.success('Welcome back!');
          this.router.navigateByUrl(this.returnUrl);
        },
        error: () => {
          this.loading = false;
          this.message.error('Incorrect email or password');
        }
      });
    } else {
      this.markFormControlsAsDirty();
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']); 
  }

  private markFormControlsAsDirty(): void {
    Object.values(this.validateForm.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }
}