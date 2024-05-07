import { Component } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abarrote',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './abarrote.component.html',
  styleUrl: './abarrote.component.scss',
})
export class AbarroteComponent {
  name = 'cereza';
  color = 'naranja';

  /* Objeto */
  fruta = {
    name: 'mango',
    color: 'amarillo',
  };

  names: string[] = ['fresa', 'pepino', 'pera'];
  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
