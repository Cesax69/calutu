import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { RegistroAgenciaComponent } from './registro-agencia/registro-agencia.component';
import { PaquetesTuristicosComponent } from './paquetes-turisticos/paquetes-turisticos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-agencia', component: RegistroAgenciaComponent },
  { path: 'paquetes', component: PaquetesTuristicosComponent },
];