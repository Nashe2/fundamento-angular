import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sesion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.scss'
})
export class SesionComponent {

  sesion = {
    email: '',
    password: '',
  }
}
