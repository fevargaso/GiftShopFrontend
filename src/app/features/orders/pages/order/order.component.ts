import { Component, inject, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationUtilService } from '@app/core/utils/notification-util.service';
import { CartService } from '@app/core/services/cart.services';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzDividerModule,
    NzCardModule,
    NzResultModule,
    NzIconModule,
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private notification = inject(NotificationUtilService);
  private cartService = inject(CartService);

  isSuccess = false;
  isProcessing = false;
  cartLength = 0;
  purchasedItems: any[] = [];

  paymentForm = this.fb.group({
    cardHolder: ['', [Validators.required]],
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expiryDate: [
      '',
      [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$'), this.expiryDateValidator()],
    ],
    cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
  });

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartLength = items.length;
      if (!this.isSuccess && items.length > 0) {
        this.purchasedItems = [...items];
      }
    });
  }

  private expiryDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value || !/^\d{2}\/\d{2}$/.test(value)) return null;

      const [month, year] = value.split('/').map((v: string) => parseInt(v, 10));
      const now = new Date();
      const currentYear = now.getFullYear() % 100;
      const currentMonth = now.getMonth() + 1;

      if (year < currentYear) return { yearExpired: true };
      if (year === currentYear && month < currentMonth) return { monthExpired: true };

      return null;
    };
  }

  calculateTotal(): number {
    return this.purchasedItems.reduce((acc, item) => acc + (item.product?.price || 0) * (item.quantity || 1), 0);
  }

  processPayment(): void {
    if (this.cartLength === 0) {
      this.notification.error('Your cart is empty.');
      return;
    }

    if (this.paymentForm.invalid) {
      this.markFormDirty();
      this.notification.warn('Please complete the card details correctly');
      return;
    }

    this.isProcessing = true;

    setTimeout(() => {
      this.isProcessing = false;
      this.isSuccess = true;
      this.notification.success('Purchase completed successfully!');
      this.cartService.clearCart();
    }, 2000);
  }

  private markFormDirty(): void {
    Object.values(this.paymentForm.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }
}
