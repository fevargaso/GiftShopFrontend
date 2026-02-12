import { Injectable, inject } from '@angular/core';
import { Role, allAppRoles, noneRole } from './roles';
import { Store } from '@ngrx/store';
import { UserState } from './user.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private readonly store = inject(Store);
  private readonly $userStore = toSignal<UserState>(this.store.select('user'));

  private currentUserRoleKey: string = 'elysiumCurrentUserRole';
  private userRole: string = noneRole;

  constructor() {}

  get currentUserRole(): string {
    const userRoleCached = localStorage.getItem(this.currentUserRoleKey);
    if (userRoleCached && this.userRole.includes(noneRole)) {
      this.userRole = userRoleCached;
    }
    return this.userRole;
  }

  set currentUserRole(userRole: string) {
    localStorage.setItem(this.currentUserRoleKey, userRole);
    this.userRole = userRole;
  }

  init(): void {
    const userRoles: string[] = this.getRoles();
    const defaultUserRole: string = this.defaultUserAppRole(userRoles);
    
    const isValidRoleCached = userRoles.some((role: string) =>
      role.includes(this.currentUserRole)
    );

    if (this.currentUserRole.includes(noneRole) || !isValidRoleCached) {
      this.currentUserRole = defaultUserRole;
    }
  }

  // Este es el método que usa tu Effect 'assingRole$'
  selectRole(roles: string[]): Role {
    if (!roles || roles.length === 0) return Role.UNAUTHORIZE;

    const firstRole = roles[0].toString().toLowerCase();

    // Mapeo directo para asegurar que STAFF se active
    if (firstRole === 'admin' || firstRole === '1' || firstRole === 'staff') {
      return Role.STAFF;
    }

    if (firstRole === 'user' || firstRole === '0' || firstRole === 'standard') {
      return Role.STANDARD;
    }

    return Role.UNAUTHORIZE;
  }

  hasQaAccess(): boolean { return this.$userStore()?.actualRole === Role.QA; }
  hasSalesAccess(): boolean { return this.$userStore()?.actualRole === Role.SALES; }
  hasPmAccess(): boolean { return this.$userStore()?.actualRole === Role.PM; }
  hasStaffAccess(): boolean { return this.$userStore()?.actualRole === Role.STAFF; }
  hasPortfolioManagerAccess(): boolean { return this.$userStore()?.actualRole === Role.PORTFOLIO_MANAGER; }

  defaultUserAppRole(userRoles: string[]): string {
    if (!userRoles || userRoles.length <= 0) return Role.UNAUTHORIZE;
    
    // Si detectamos Admin en la lista, devolvemos STAFF de inmediato
    if (userRoles.some(r => r.toLowerCase() === 'admin' || r === '1')) {
      return Role.STAFF;
    }

    const filteredUserRoles = this.removeUnmatchedAppRoles(userRoles);
    
    if (filteredUserRoles.length === 0 && userRoles.some(r => r.toUpperCase() === 'USER')) {
      return Role.STANDARD;
    }

    // Mapeo manual para asegurar que el string se convierta en el valor del Enum correcto
    const firstRole = filteredUserRoles[0];
    if (firstRole === 'Admin' || firstRole === '1') return Role.STAFF;
    if (firstRole === 'User' || firstRole === '0') return Role.STANDARD;

    return (firstRole as Role) || Role.UNAUTHORIZE;
  }

  public removeUnmatchedAppRoles(roles: string[]): string[] {
    const allowedRoles = ['Admin', 'User', 'Staff', 'Standard', '1', '0'];
    return roles.filter(role => allowedRoles.includes(role));
  }

  getRoles(): string[] {
    const storeRoles = this.$userStore()?.roles;
    if (storeRoles && storeRoles.length > 0) return storeRoles;

    const savedUser = localStorage.getItem('loggedUser');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        // Nos aseguramos de devolver el array con el rol del backend
        return user.roles || (user.role ? [user.role] : [Role.UNAUTHORIZE]);
      } catch {
        return [Role.UNAUTHORIZE];
      }
    }
    return [Role.UNAUTHORIZE];
  }
}