import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { createAction, createReducer, on, props } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { RoleService } from './role.service';
import { Role } from './roles';

@Injectable()
export class UserEffects {
  protected readonly actions$ = inject(Actions);
  protected readonly roleService = inject(RoleService);
  private readonly currentUserRoleKey: string = 'elysiumCurrentUserRole';

  filterRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap(({ roles }) => [filterRoles({ roles: this.roleService.removeUnmatchedAppRoles(roles) })])
    )
  );

  assingRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap((action) => {
        let possibleRole = this.roleService.selectRole(action.roles);
        
        const userRoleCached = localStorage.getItem(this.currentUserRoleKey);
        if (userRoleCached && action.roles.some((role) => role === userRoleCached)) {
          possibleRole = userRoleCached as Role;
        } else {
          localStorage.setItem(this.currentUserRoleKey, possibleRole.toString());
        }
        return [assignRole({ role: possibleRole })];
      })
    )
  );

  changeRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeRole),
      switchMap(({ role }) => {
        localStorage.setItem(this.currentUserRoleKey, role.toString());
        return [assignRole({ role })];
      })
    )
  );
}

export type UserState = {
  id: string;
  email: string;
  username?: string;
  name: string;
  initials: string;
  roles: string[];
  actualRole: Role,
  isLoading: boolean;
};

const getPersistedUser = () => {
  const data = localStorage.getItem('loggedUser');
  const roleCached = localStorage.getItem('elysiumCurrentUserRole');
  
  if (!data) return null;
  try {
    const user = JSON.parse(data);

    const actualRole = roleCached || (user.roles?.some((r: any) => r.toString().toLowerCase() === 'admin' || r.toString() === '1') ? Role.STAFF : Role.STANDARD);
    
    return { ...user, actualRole };
  } catch {
    return null;
  }
};

const persistedUser = getPersistedUser();

const initialState: UserState = {
  id: persistedUser?.id || '', 
  email: persistedUser?.email || '',
  name: persistedUser?.name || 'Guest',
  initials: persistedUser?.initials || 'G',
  roles: persistedUser?.roles || [Role.UNAUTHORIZE], 
  actualRole: (persistedUser?.actualRole as Role) || Role.UNAUTHORIZE,
  isLoading: false,
};

export const addUser = createAction('[User] Add', props<{ id: string; email: string; username?: string; firstName: string; lastName: string; roles: string[] }>());
export const assignRole = createAction('[User] Assign Role', props<{ role: Role }>());
export const filterRoles = createAction('[User] Filter Roles', props<{ roles: string[] }>());
export const changeRole = createAction('[User] Change Role', props<{ role: Role }>());

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    const firstI = action.firstName?.charAt(0) || '';
    const lastI = action.lastName?.charAt(0) || '';
    const initials = (firstI + lastI).toUpperCase() || 'U';

    const rawRole = action.roles && action.roles.length > 0 
                    ? action.roles[0].toString().toLowerCase() 
                    : '';

    let assignedRole: Role;

    if (rawRole === 'admin' || rawRole === '1' || rawRole === 'staff') {
      assignedRole = Role.STAFF; 
    } else if (rawRole === 'user' || rawRole === '0' || rawRole === 'standard') {
      assignedRole = Role.STANDARD;
    } else {
      assignedRole = Role.UNAUTHORIZE;
    }

    return {
      ...state,
      id: action.id,
      email: action.email,
      username: action.username,
      name: `${action.firstName} ${action.lastName}`.trim(),
      initials,
      roles: action.roles,
      actualRole: assignedRole 
    };
  }),
  on(assignRole, (state, action) => ({ ...state, actualRole: action.role })),
  on(filterRoles, (state, action) => ({ ...state, roles: action.roles }))
);