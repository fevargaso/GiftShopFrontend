import { inject, Injectable } from '@angular/core';
import { RoleService } from '../auth/role.service';
import { NavItem } from '../models/nav-item.model';

const homeNavItem: NavItem = {
  id: 'itm_navbar_home',
  name: 'Home.TITLE',
  route: ['home'],
  icon: 'unordered-list',
};

const adminNavItem: NavItem = {
  id: 'itm_navbar_admin',
  name: 'Admin', // 
  route: ['admin/products'], 
  icon: 'setting',
};

const categoriesNavItem: NavItem = {
  id: 'itm_navbar_categories',
  name: 'Categories', // 
  route: ['admin/categories'], 
  icon: 'setting',
};

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly roleService = inject(RoleService);

  public getNavItems(): NavItem[] {
    let items = [homeNavItem, adminNavItem, categoriesNavItem];

    return items;
  }

  public getDisplayRoles(): string[] {
    let roles = this.roleService.removeUnmatchedAppRoles(
      this.roleService.getRoles(),
    );
    return roles;
  }

}
