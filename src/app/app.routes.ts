import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@enroll-ng/core').then((m) => m.CoreComponent),
    pathMatch: 'full',
  },
];
