import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Usuario registrado:', this.usuario);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }

  cambiarARegistroAgencia() {
    this.router.navigate(['/registro-agencia']);
  }
}