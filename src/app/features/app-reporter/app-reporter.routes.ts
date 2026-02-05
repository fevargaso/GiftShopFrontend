import { Role } from '@app/core/auth/roles';
import { FeatureFormComponent } from './feature-form/feature-form.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { Route } from '@angular/router';
import { isAuthenticated } from '@app/core/auth/is-authenticated.guard';
import { isAuthorized } from '@app/core/auth/is-authorized.guard';

// Toggle next line as needed.
const skipRoles = false;
const defaultAuthorizedRoles = skipRoles ? [] : [Role.STANDARD, Role.SALES, Role.PM, Role.QA, Role.STAFF];

// Toggle next line as needed.
const skipGuards = false;
const defaultGuards = skipGuards ? [] : [
  isAuthenticated,
  isAuthorized,
];

export const appReporterRoutes: Route[] = [{
  path: '',
  data: { roles: defaultAuthorizedRoles },
  canActivateChild: [...defaultGuards],
  children: [
    {
      path: 'feature',
      component: FeatureFormComponent,
    },
    {
      path: 'issue',
      component: IssueFormComponent,
    },
  ],
}];
