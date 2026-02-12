import { inject, Injectable } from '@angular/core';
import { RoleService } from '../auth/role.service';
import { NavItem } from '../models/nav-item.model';
import { Role } from '../auth/roles';

const homeNavItem: NavItem = {
  id: 'itm_navbar_home',
  name: 'Home.TITLE',
  route: ['home'],
  icon: 'unordered-list',
};

const productsNavItem: NavItem = {
  id: 'itm_navbar_admin',
  name: 'Store',
  route: ['products'],
  icon: 'setting',
};

const adminNavItem: NavItem = {
  id: 'itm_navbar_admin',
  name: 'Products', 
  route: ['admin/products'], 
  icon: 'setting',
};

const categoriesNavItem: NavItem = {
  id: 'itm_navbar_categories',
  name: 'Categories', 
  route: ['admin/categories'], 
  icon: 'setting',
};

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly roleService = inject(RoleService);

  public getNavItems(role: Role | string | undefined): NavItem[] {
    let items = [homeNavItem, productsNavItem];

    if (role === Role.STAFF) {
      items.push(adminNavItem, categoriesNavItem);
    }

    return items;
  }

  public getDisplayRoles(): string[] {
    return this.roleService.removeUnmatchedAppRoles(
      this.roleService.getRoles(),
    );
  }
}
