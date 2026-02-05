import { Injectable, inject } from '@angular/core';
import { Role, allAppRoles, noneRole } from './roles';
import { KeycloakService } from 'keycloak-angular';
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

  constructor(private readonly keycloak: KeycloakService) {}

  get currentUserRole(): string {
    const userRoleCached: string | null = localStorage.getItem(
      this.currentUserRoleKey
    );
    if (userRoleCached && this.userRole.includes(noneRole)) {
      this.currentUserRole = userRoleCached;
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
    const isValidRoleCached = userRoles.some((userRole: string) =>
      userRole.includes(this.currentUserRole)
    );
    if (this.currentUserRole.includes(noneRole) || !isValidRoleCached) {
      this.currentUserRole = defaultUserRole;
    }
  }

  selectRole(roles: string[]): Role {
    if (roles.includes(Role.STAFF)) {
      return Role.STAFF;
    } else if (roles.includes(Role.PORTFOLIO_MANAGER)) {
      return Role.PORTFOLIO_MANAGER;
    } else if (roles.includes(Role.SALES)) {
      return Role.SALES;
    } else if (roles.includes(Role.PM)) {
      return Role.PM;
    } else if (roles.includes(Role.QA)) {
      return Role.QA;
    } else if (roles.includes(Role.STANDARD)) {
      return Role.STANDARD;
    }
    return Role.UNAUTHORIZE;
  }

  userBelongsToRole(role: Role): boolean {
    return false;
  }

  onChangeRole(role: string): void {
    const userRoles: string[] = this.removeUnmatchedAppRoles(this.getRoles());
    this.currentUserRole = role;
    const isValidRoleChanged = userRoles.some((userRole: string) =>
      userRole.includes(this.currentUserRole)
    );
    if (!isValidRoleChanged) {
      this.init();
    }
  }

  hasQaAccess(): boolean {
    return Role.QA.includes(this.$userStore()!.actualRole);
  }

  hasSalesAccess(): boolean {
    return Role.SALES.includes(this.$userStore()!.actualRole);
  }

  hasPmAccess(): boolean {
    return Role.PM.includes(this.$userStore()!.actualRole);
  }

  hasStaffAccess(): boolean {
    return Role.STAFF.includes(this.$userStore()!.actualRole);
  }

  hasPortfolioManagerAccess(): boolean {
    return Role.PORTFOLIO_MANAGER.includes(this.$userStore()!.actualRole);
  }

  defaultUserAppRole(userRoles: string[]) {
    if (!userRoles || userRoles.length <= 0) {
      return noneRole;
    }
    const filteredUserRoles: string[] = this.removeUnmatchedAppRoles(userRoles);

    return filteredUserRoles[0];
  }

  removeUnmatchedAppRoles(userRoles: string[]) {
    let exclude: string[] = [];
    // Add roles to exclude
    return allAppRoles.filter(
      (item: string) => userRoles.includes(item) && !exclude.includes(item)
    );
  }

  getRoles(): string[] {
    let roles = this.keycloak.getKeycloakInstance().realmAccess?.roles || [];
    return roles;
  }
}
