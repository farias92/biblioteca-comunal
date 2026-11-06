import { Component } from '@angular/core';
import type { Libro } from '../models/libro';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  libro: Libro = {
    idLibro: 4,
    titulo: 'Hábitos atómicos',
    autor: 'James Clear',
    disponible: true
  };

  get estadoLibro(): string {
    return this.libro.disponible ? 'Disponible' : 'No disponible';
  }

}