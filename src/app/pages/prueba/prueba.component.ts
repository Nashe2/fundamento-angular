import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',/* Esto conecta al componente con el html, es decir esa es la vista asociada a este componente*/
  styleUrl: './prueba.component.scss'
})

/* Aquí se pone la lógica del negocio */
export class PruebaComponent {
name = 'Nashe';
age = 18;
img = 'https://www.w3schools.com/howto/img_avatar.png';
}
