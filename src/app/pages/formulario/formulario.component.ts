import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, MatSlideToggleModule,],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  register = {
    name: '',
    email: '',
    password: '',
  }

  onRegister(){
    console.log(this.register);
  }
}
