import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { createAction, createReducer, on, props } from '@ngrx/store';
import { map } from 'rxjs';
import { RoleService } from './role.service';
import { Role } from './roles';

const EMPTY_USER_STATE: UserState = {
  id: '',
  email: '',
  username: undefined,
  name: 'Guest',
  initials: 'G',
  roles: [Role.UNAUTHORIZE],
  actualRole: Role.UNAUTHORIZE,
  isLoading: false,
};

export type UserState = {
  id: string;
  email: string;
  username?: string;
  name: string;
  initials: string;
  roles: string[];
  actualRole: Role;
  isLoading: boolean;
};

@Injectable()
export class UserEffects {
  private readonly actions$ = inject(Actions);
  private readonly roleService = inject(RoleService);
  private readonly CURRENT_ROLE_KEY = 'CurrentUserRole';

  filterRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      map(({ roles }) =>
        filterRoles({
          roles: this.roleService.removeUnmatchedAppRoles(roles),
        }),
      ),
    ),
  );

  assignRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      map(({ roles }) => {
        let role = this.roleService.selectRole(roles);
        const cached = localStorage.getItem(this.CURRENT_ROLE_KEY);
        if (cached && roles.includes(cached)) {
          role = cached as Role;
        } else {
          localStorage.setItem(this.CURRENT_ROLE_KEY, role);
        }
        return assignRole({ role });
      }),
    ),
  );

  changeRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeRole),
      map(({ role }) => {
        localStorage.setItem(this.CURRENT_ROLE_KEY, role);
        return assignRole({ role });
      }),
    ),
  );
}

const getPersistedUser = () => {
  const data = localStorage.getItem('loggedUser');
  if (!data) return null;
  try {
    const user = JSON.parse(data);
    const cachedRole = localStorage.getItem('CurrentUserRole');
    const isAdmin =
      user.roles?.some((r: any) => r.toString().toLowerCase() === 'admin' || r.toString() === '1') ?? false;
    const actualRole = cachedRole || (isAdmin ? Role.STAFF : Role.STANDARD);
    return { ...user, actualRole };
  } catch {
    return null;
  }
};

export const clearUser = createAction('[User] Clear');

export const addUser = createAction(
  '[User] Add',
  props<{
    id: string;
    email: string;
    username?: string;
    firstName: string;
    lastName: string;
    roles: string[];
  }>(),
);

export const assignRole = createAction('[User] Assign Role', props<{ role: Role }>());

export const filterRoles = createAction('[User] Filter Roles', props<{ roles: string[] }>());

export const changeRole = createAction('[User] Change Role', props<{ role: Role }>());

const persistedUser = getPersistedUser();
const initialState: UserState = persistedUser
  ? {
      id: persistedUser.id,
      email: persistedUser.email,
      username: persistedUser.username,
      name: persistedUser.name || 'Guest',
      initials: persistedUser.initials || 'G',
      roles: persistedUser.roles || [Role.UNAUTHORIZE],
      actualRole: (persistedUser.actualRole as Role) || Role.UNAUTHORIZE,
      isLoading: false,
    }
  : EMPTY_USER_STATE;

export const userReducer = createReducer(
  initialState,

  on(addUser, (state, action) => {
    const firstI = action.firstName?.charAt(0) || '';
    const lastI = action.lastName?.charAt(0) || '';
    const initials = (firstI + lastI).toUpperCase() || 'U';

    const rawRole = action.roles?.[0]?.toString().toLowerCase() || '';
    let assignedRole: Role = Role.UNAUTHORIZE;

    if (['admin', '1', 'staff'].includes(rawRole)) {
      assignedRole = Role.STAFF;
    } else if (['user', '0', 'standard'].includes(rawRole)) {
      assignedRole = Role.STANDARD;
    }

    return {
      ...state,
      id: action.id,
      email: action.email,
      username: action.username,
      name: `${action.firstName} ${action.lastName}`.trim(),
      initials,
      roles: action.roles,
      actualRole: assignedRole,
    };
  }),

  on(assignRole, (state, action) => ({
    ...state,
    actualRole: action.role,
  })),

  on(filterRoles, (state, action) => ({
    ...state,
    roles: action.roles,
  })),

  on(clearUser, () => ({ ...EMPTY_USER_STATE })),
);
