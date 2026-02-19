import { Injectable, inject } from '@angular/core';
import { Role, noneRole } from './roles';
import { Store } from '@ngrx/store';
import { UserState } from './user.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private readonly store = inject(Store);
  private readonly userStore = toSignal<UserState>(
    this.store.select('user')
  );

  private readonly currentUserRoleKey = 'CurrentUserRole';
  private userRole: string = noneRole;

  get currentUserRole(): string {
    const cached = localStorage.getItem(this.currentUserRoleKey);

    if (cached && this.userRole === noneRole) {
      this.userRole = cached;
    }

    return this.userRole;
  }

  set currentUserRole(role: string) {
    localStorage.setItem(this.currentUserRoleKey, role);
    this.userRole = role;
  }

  init(): void {
    const userRoles = this.getRoles();
    const defaultRole = this.defaultUserAppRole(userRoles);

    const isValidCached = userRoles.some(role =>
      role.includes(this.currentUserRole)
    );

    if (this.currentUserRole === noneRole || !isValidCached) {
      this.currentUserRole = defaultRole;
    }
  }


  selectRole(roles: string[]): Role {
    if (!roles?.length) return Role.UNAUTHORIZE;

    const role = roles[0].toLowerCase();

    if (['admin', '1', 'staff'].includes(role)) {
      return Role.STAFF;
    }

    if (['user', '0', 'standard'].includes(role)) {
      return Role.STANDARD;
    }

    return Role.UNAUTHORIZE;
  }

  private hasAccess(role: Role): boolean {
    return this.userStore()?.actualRole === role;
  }

  hasQaAccess() { return this.hasAccess(Role.QA); }
  hasSalesAccess() { return this.hasAccess(Role.SALES); }
  hasPmAccess() { return this.hasAccess(Role.PM); }
  hasStaffAccess() { return this.hasAccess(Role.STAFF); }
  hasPortfolioManagerAccess() { return this.hasAccess(Role.PORTFOLIO_MANAGER); }


  defaultUserAppRole(userRoles: string[]): string {
    if (!userRoles?.length) return Role.UNAUTHORIZE;

    const lowerRoles = userRoles.map(r => r.toLowerCase());

    if (lowerRoles.includes('admin') || lowerRoles.includes('1')) {
      return Role.STAFF;
    }

    const filtered = this.removeUnmatchedAppRoles(userRoles);

    if (!filtered.length && lowerRoles.includes('user')) {
      return Role.STANDARD;
    }

    const first = filtered[0];

    if (['Admin', '1'].includes(first)) return Role.STAFF;
    if (['User', '0'].includes(first)) return Role.STANDARD;

    return (first as Role) || Role.UNAUTHORIZE;
  }

  removeUnmatchedAppRoles(roles: string[]): string[] {
    const allowed = ['Admin', 'User', 'Staff', 'Standard', '1', '0'];
    return roles.filter(role => allowed.includes(role));
  }


  getRoles(): string[] {
    const storeRoles = this.userStore()?.roles;
    if (storeRoles?.length) return storeRoles;

    const savedUser = localStorage.getItem('loggedUser');
    if (!savedUser) return [Role.UNAUTHORIZE];

    try {
      const user = JSON.parse(savedUser);
      return user.roles || (user.role ? [user.role] : [Role.UNAUTHORIZE]);
    } catch {
      return [Role.UNAUTHORIZE];
    }
  }
}
