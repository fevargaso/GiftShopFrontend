import { Route } from "@angular/router";
import { isAuthenticated } from "@app/core/auth/is-authenticated.guard";
import { isAuthorized } from "@app/core/auth/is-authorized.guard";
import { HomeComponent } from "./view/home.component";

const skipGuards = false;
const defaultGuards = skipGuards ? [] : [
  isAuthenticated,
  isAuthorized
];

export const homeRoutes: Route[] = [{
  path: '',
  canActivateChild: [...defaultGuards],
  children : [
    {
      path: '',
      component: HomeComponent,
    },
  ],
}]
