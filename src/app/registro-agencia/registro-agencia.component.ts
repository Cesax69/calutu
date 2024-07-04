import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-agencia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-agencia.component.html',
  styleUrls: ['./registro-agencia.component.css']
})
export class RegistroAgenciaComponent {
  agencia = {
    nombre: '',
    ruc: '',
    direccion: '',
    telefono: '',
    email: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Agencia registrada:', this.agencia);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }

  cambiarARegistroUsuario() {
    this.router.navigate(['/registro']);
  }
}