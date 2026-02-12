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

selectRole(roles: string[]): Role {
    if (!roles || roles.length === 0) return Role.UNAUTHORIZE;

    const normalized = roles.map(r => r.toUpperCase());

    if (roles.includes(Role.STAFF)) return Role.STAFF;
    if (roles.includes(Role.PORTFOLIO_MANAGER)) return Role.PORTFOLIO_MANAGER;
    if (roles.includes(Role.SALES)) return Role.SALES;
    if (roles.includes(Role.PM)) return Role.PM;
    if (roles.includes(Role.QA)) return Role.QA;

    if (normalized.includes('USER') || normalized.includes(Role.STANDARD.toUpperCase())) {
      return Role.STANDARD;
    }
    
    return Role.UNAUTHORIZE;
  }

  hasQaAccess(): boolean { return this.$userStore()?.actualRole === Role.QA; }
  hasSalesAccess(): boolean { return this.$userStore()?.actualRole === Role.SALES; }
  hasPmAccess(): boolean { return this.$userStore()?.actualRole === Role.PM; }
  hasStaffAccess(): boolean { return this.$userStore()?.actualRole === Role.STAFF; }
  hasPortfolioManagerAccess(): boolean { return this.$userStore()?.actualRole === Role.PORTFOLIO_MANAGER; }

defaultUserAppRole(userRoles: string[]) {
    if (!userRoles || userRoles.length <= 0) return Role.UNAUTHORIZE;
    
    const filteredUserRoles = this.removeUnmatchedAppRoles(userRoles);
    
    if (filteredUserRoles.length === 0 && userRoles.some(r => r.toUpperCase() === 'USER')) {
      return Role.STANDARD;
    }

    return (filteredUserRoles[0] as Role) || Role.UNAUTHORIZE;
  }


removeUnmatchedAppRoles(userRoles: string[]) {
    return allAppRoles.filter((appRole: string) => 
      userRoles.some(ur => ur.toUpperCase() === appRole.toUpperCase() || ur.toUpperCase() === 'USER')
    );
  }


  getRoles(): string[] {
    const storeRoles = this.$userStore()?.roles;
    if (storeRoles && storeRoles.length > 0) return storeRoles;

    const savedUser = localStorage.getItem('loggedUser');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        return user.roles || [Role.UNAUTHORIZE];
      } catch {
        return [Role.UNAUTHORIZE];
      }
    }
    return [Role.UNAUTHORIZE];
  }
}