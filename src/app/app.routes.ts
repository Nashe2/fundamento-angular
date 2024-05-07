import { Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { HomeComponent } from './pages/home/home.component';
import { AbarroteComponent } from './pages/abarrote/abarrote.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'prueba', /* ruta */
    component: PruebaComponent,
  },
  {
    path: 'abarrote',
    component: AbarroteComponent,
  },
  {
    path: 'producto',
    component: ProductoComponent,
  }
];

