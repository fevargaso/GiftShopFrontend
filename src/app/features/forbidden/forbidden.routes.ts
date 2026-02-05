import { Route } from "@angular/router";
import { ForbiddenComponent } from "./forbidden.component";
import { isAuthenticated } from "@app/core/auth/is-authenticated.guard";

// Toggle next line as needed.
const skipGuards = false;
const defaultGuards = skipGuards ? [] : [
  isAuthenticated,
];

export const forbiddenRoutes: Route[] = [{
  path: '',
  canActivateChild: [...defaultGuards],
  children: [
    {
      path: '',
      component: ForbiddenComponent,
    },
  ],
}];
