import { Routes } from '@angular/router';
import { isAppLoaded } from './core/auth/is-app-loaded.guard';
import { AdminProductsComponent } from './features/admin/admin-product/admin-porduct.component';
import { AdminCategoriesComponent } from './features/admin/admin-categories/admin-categories.component';
import { OrderComponent } from './features/orders/pages/order/order.component';
import { authGuard, adminGuard } from './core/auth/auth.guard'; 

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@features/home/home.routes').then((mod) => mod.homeRoutes),
  },
  {
    path: 'app-reporter',
    canActivate: [isAppLoaded],
    loadChildren: () => import('@features/app-reporter/app-reporter.routes')
      .then((mod) => mod.appReporterRoutes),
  },
  {
    path: 'products', 
    loadChildren: () => import('@features/products/pages/products.routes')
      .then(m => m.PRODUCTS_ROUTES)
  },

  {
    path: 'orders', 
    canActivate: [authGuard], 
    loadChildren: () => import('@features/orders/pages/orders.routes')
      .then(m => m.ORDERS_ROUTES)
  },

  {
    path: 'cart', 
    loadChildren: () => import('@features/cart/pages/cart.routes')
      .then(m => m.CARTS_ROUTES)
  },
  {
    path: 'login',
    loadComponent: () => import('@features/login/login.component').then(m => m.LoginComponent)
  },
  {
  path: 'register',
  loadComponent: () => import('@features/login/register.component').then(m => m.RegisterComponent)
  },

  {
    path: 'admin',
    canActivate: [adminGuard], 
    children: [
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'categories',
        component: AdminCategoriesComponent
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  },

  {
    path: 'forbidden',
    loadChildren: () =>
      import('@features/forbidden/forbidden.routes').then(
        (mod) => mod.forbiddenRoutes
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];