import { Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'prueba', /* ruta */
    component: PruebaComponent,
  },
];

