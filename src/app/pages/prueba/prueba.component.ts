import { Component } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  names: string[] = ['Enrique', 'María', 'Paola'];
  newName = '';

  /*Metodos de event */
  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  /* en este metodo para evento, solo le decimos con this
  que al array queremos agregarle un objeto con el metodo
  de array push a traves de la nueva variable --> this.newName
  */
  addName(){
    this.names.push(this.newName);
    /* decirle que después de agregar quede en vacio el input */
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

}
