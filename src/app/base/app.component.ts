import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { SplashScreenComponent } from '../shared/components/splash-screen/splash-screen.component';
import { Store } from '@ngrx/store';
import { changeRole, UserState } from '../core/auth/user.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Role } from '../core/auth/roles';
import { AppState } from '../core/auth/app.store';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from '../core/services/header.service';
import { DateTime } from 'luxon';
import { CartService } from '@app/core/services/cart.services';
import { CartItem } from '@app/core/models/cart-item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, SplashScreenComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private keycloak = inject(KeycloakService);
  private headerService = inject(HeaderService);
  private cartService = inject(CartService);
  protected readonly store = inject(Store);

  protected readonly $user = toSignal<UserState>(this.store.select('user'));
  protected readonly $app = toSignal<AppState>(this.store.select('app'));
  protected readonly $name = computed(() => this.$user()!.name);
  protected readonly $initials = computed(() => this.$user()!.initials);
  protected readonly $role = computed(() => this.$user()!.actualRole);
  protected readonly $roles = computed(() => this.$user()!.roles);
  protected readonly $cartItems = toSignal(
  this.cartService.cart$,
  { initialValue: [] as CartItem[] }
);
  protected readonly showSplash = computed(
    () =>
      this.$app()!.initializing ||
      !this.$app()!.operational ||
      this.$app()!.checking
  );
  protected readonly noOperational = computed(
    () => !this.$app()!.initializing && !this.$app()!.operational
  );

  protected readonly navItems = computed(() => {
    this.$user();
    return this.headerService.getNavItems();
  });

  protected readonly $cartCount = computed(() =>
  this.$cartItems().reduce(
    (total, item) => total + item.quantity,
    0
  )
);

  protected readonly year: number = DateTime.now().year;

  logout(): void {
    this.keycloak.logout(location.origin);
  }

  onChangeRole(role: string | null = null): void {
    if (role !== null) {
      this.store.dispatch(changeRole({ role: role as Role }));
      window.location.href = '/';
    }
  }
}
