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
        // Usamos el servicio para determinar el rol real
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
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

const persistedUser = getPersistedUser();

// IMPORTANTE: Si ya hay usuario en localStorage, cargamos su rol guardado
const initialState: UserState = {
  id: persistedUser?.id || '', 
  email: persistedUser?.email || '',
  name: persistedUser?.name || 'Guest',
  initials: persistedUser?.initials || 'G',
  roles: persistedUser?.roles || [Role.UNAUTHORIZE], 
  actualRole: persistedUser?.actualRole || (persistedUser ? Role.STANDARD : Role.UNAUTHORIZE),
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

    // Mapeo inmediato: Si viene 'User' de .NET, es STANDARD
    const hasValidRole = action.roles.some(r => 
      r.toLowerCase() === 'user' || r.toLowerCase() === 'standard'
    );
    const assignedRole = hasValidRole ? Role.STANDARD : (action.roles[0] as Role || Role.UNAUTHORIZE);

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