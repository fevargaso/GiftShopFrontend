import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { createAction, createReducer, on, props } from '@ngrx/store';


import { switchMap } from 'rxjs';
import { v4 as uuid } from 'uuid';
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
      switchMap(({ roles }) => {
        return [filterRoles({ roles: this.roleService.removeUnmatchedAppRoles(roles) })];
      }),
    )
  );

  assingRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap((action) => {
        let possibleRole = this.roleService.selectRole(action.roles);
        const userRoleCached: string | null = localStorage.getItem(
          this.currentUserRoleKey,
        );
        if (userRoleCached && action.roles.some((role) => role === userRoleCached)) {
          possibleRole = userRoleCached as Role;
        } else {
          localStorage.setItem(this.currentUserRoleKey, possibleRole.toString());
        }
        return [assignRole({ role: possibleRole })];
      }),
    )
  );

  changeRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeRole),
      switchMap(({ role }) => {
        localStorage.setItem(this.currentUserRoleKey, role.toString());
        return [assignRole({ role })];
      }),
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

const initialState: UserState = {
  id: uuid(),
  email: 'pinnacle@mail.com',
  name: 'Pinnacle',
  initials: 'P',
  roles: [],
  actualRole: Role.UNAUTHORIZE,
  isLoading: false,
};

export const addUser = createAction('[User] Add', props<{ id: string; email: string; username?: string; firstName: string; lastName: string; roles: string[] }>());
export const assignRole = createAction('[User] Assign Role', props<{ role: Role }>());
export const filterRoles = createAction('[User] Filter Roles', props<{ roles: string[] }>());
export const changeRole = createAction('[User] Change Role', props<{ role: Role }>());

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    const initials = `${action.firstName?.charAt(0)}${action.lastName?.charAt(0)}`;
    return {
      ...state,
      id: action.id,
      email: action.email,
      username: action.username,
      name: `${action.firstName} ${action.lastName}`,
      initials,
      roles: action.roles,
    };
  }),
  on(assignRole, (state, action) => {
    return {
      ...state,
      actualRole: action.role,
    };
  }),
  on(filterRoles, (state, action) => {
    return {
      ...state,
      roles: action.roles,
    };
  }),
);
