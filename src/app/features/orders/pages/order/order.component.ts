import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationUtilService } from '@app/core/utils/notification-util.service';
import { CartService } from '@app/core/services/cart.services';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, NzRadioModule, NzDividerModule, NzCardModule, CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  paymentForm!: FormGroup;
  isProcessing = false;
  cartLength: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notification: NotificationUtilService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartLength = items.length;
    });

    this.paymentForm = this.fb.group({
      cardHolder: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  processPayment(): void {
    if (this.cartLength === 0) {
      this.notification.error('Your cart is empty. You cannot proceed with the purchase.');
      return;
    }

    if (this.paymentForm.valid || this.useExistingCard()) {
      this.isProcessing = true;
      
      setTimeout(() => {
        this.isProcessing = false;
        this.notification.success('¡Pago procesado con éxito!');
        this.cartService.clearCart();
        this.router.navigate(['/products']);
      }, 2000);
    } else {
      this.notification.warn('Por favor, completa los datos de la tarjeta');
    }
  }

  private useExistingCard(): boolean {
    return true; 
  }
}