import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'; // Añadido AbstractControl y ValidationErrors
import { Router, RouterModule } from '@angular/router';
import { NotificationUtilService } from '@app/core/utils/notification-util.service';
import { CartService } from '@app/core/services/cart.services';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzRadioModule,
        NzDividerModule,
        NzCardModule,
        NzResultModule, 
        NzIconModule,
        CommonModule,
        FormsModule,
        RouterModule 
    ],
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    paymentForm!: FormGroup;
    isSuccess = false;
    isProcessing = false;
    cartLength: number = 0;
    
    purchasedItems: any[] = []; 

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private notification: NotificationUtilService,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.cartService.cart$.subscribe(items => {
            this.cartLength = items.length;
            if (!this.isSuccess && items.length > 0) {
                this.purchasedItems = items.map(item => ({ ...item }));
            }
        });

        this.paymentForm = this.fb.group({
            cardHolder: ['', [Validators.required]],
            cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
            expiryDate: ['', [
                Validators.required, 
                Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$'),
                this.expiryDateValidator() 
            ]],
            cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
        });
    }

    expiryDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value || !/^\d{2}\/\d{2}$/.test(value)) {
                return null;
            }

            const parts = value.split('/');
            const month = parseInt(parts[0], 10);
            const year = parseInt(parts[1], 10);

            const now = new Date();
            const currentYear = now.getFullYear() % 100;
            const currentMonth = now.getMonth() + 1;

            if (year < currentYear) {
                return { yearExpired: true };
            }

            if (year === currentYear && month < currentMonth) {
                return { monthExpired: true };
            }

            return null;
        };
    }

    calculateTotal(): number {
        return this.purchasedItems.reduce((acc, item) => {
            const price = item.product?.price || 0;
            const qty = item.quantity || 1;
            return acc + (price * qty);
        }, 0);
    }

    processPayment(): void {
        if (this.cartLength === 0) {
            this.notification.error('Your cart is empty. You cannot proceed with the purchase.');
            return;
        }

        if (this.paymentForm.valid) {
            this.purchasedItems = [...this.cartService.getCartItems()];
            this.isProcessing = true;

            setTimeout(() => {
                this.isProcessing = false;
                this.isSuccess = true;
                this.notification.success('Purchase completed successfully!');
                this.cartService.clearCart(); 
            }, 2000);
        } else {
            Object.values(this.paymentForm.controls).forEach(control => {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
            });
            this.notification.warn('Please complete the card details correctly');
        }
    }
}