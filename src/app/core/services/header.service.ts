import { inject, Injectable } from '@angular/core';
import { RoleService } from '../auth/role.service';
import { NavItem } from '../models/nav-item.model';
import { Role } from '../auth/roles';

const NAV_ITEMS = {
  home: {
    id: 'itm_navbar_home',
    name: 'Home.TITLE',
    route: ['home'],
    icon: 'unordered-list',
  } as NavItem,

  store: {
    id: 'itm_navbar_store',
    name: 'Store',
    route: ['products'],
    icon: 'shop',
  } as NavItem,

  adminProducts: {
    id: 'itm_navbar_admin_products',
    name: 'Products',
    route: ['admin/products'],
    icon: 'setting',
  } as NavItem,

  adminCategories: {
    id: 'itm_navbar_admin_categories',
    name: 'Categories',
    route: ['admin/categories'],
    icon: 'setting',
  } as NavItem,

  adminUsers: {
    id: 'itm_navbar_admin_users',
    name: 'Users',
    route: ['admin/users'],
    icon: 'setting',
  } as NavItem,
};

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private readonly roleService = inject(RoleService);

  getNavItems(role?: Role): NavItem[] {
    const items: NavItem[] = [
      NAV_ITEMS.home,
      NAV_ITEMS.store
    ];

    if (role === Role.STAFF) {
      items.push(
        NAV_ITEMS.adminProducts,
        NAV_ITEMS.adminCategories,
        NAV_ITEMS.adminUsers
      );
    }

    return items;
  }

  getDisplayRoles(): string[] {
    return this.roleService.removeUnmatchedAppRoles(
      this.roleService.getRoles()
    );
  }
}
