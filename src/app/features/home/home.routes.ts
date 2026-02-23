import { Route } from '@angular/router';
import { HomeComponent } from './view/home.component';

export const homeRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
