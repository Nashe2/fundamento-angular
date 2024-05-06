import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl:
    './prueba.component.html' /* Esto conecta al componente con el html, es decir esa es la vista asociada a este componente*/,
  styleUrl: './prueba.component.scss',
})

/* Aquí se pone la lógica del negocio */
export class PruebaComponent {
  name = 'Nashe';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  btnDisabled = false;

  /* Objeto */
  person = {
    name: 'Nashe',
    age: 20,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  /*Metodos de event */
  toogleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increseAge(){
    this.person.age += 1;
  }
}
