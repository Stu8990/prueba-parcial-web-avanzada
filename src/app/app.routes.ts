import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Acerca } from './acerca/acerca';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'acerca',
    component: Acerca
  }
];
