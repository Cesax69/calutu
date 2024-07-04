import { Component, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-paquetes-turisticos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paquetes-turisticos.component.html',
  styleUrls: ['./paquetes-turisticos.component.css']
})
export class PaquetesTuristicosComponent implements OnInit {
  paquetes = [
    { nombre: 'Cultural', imagen: 'assets/cultural.jpg', descripcion: 'Explora la rica historia y patrimonio de diferentes destinos.' },
    { nombre: 'Turístico', imagen: 'assets/turistico.jpg', descripcion: 'Visita los lugares más emblemáticos y populares.' },
    { nombre: 'Romántico', imagen: 'assets/romantico.jpg', descripcion: 'Escápate con tu pareja a destinos ideales para el amor.' },
    { nombre: 'Negocios', imagen: 'assets/negocios.jpg', descripcion: 'Viaja con comodidad y estilo para tus reuniones de trabajo.' },
    { nombre: 'Aventura', imagen: 'assets/aventura.jpg', descripcion: 'Desafía tus límites con emocionantes actividades al aire libre.' }
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  }
  platformId(platformId: any) {
    throw new Error('Method not implemented.');
  }
}