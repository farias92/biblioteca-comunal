import type { Libro } from "../models/libro.js";

// Consultar libros disponibles
export function librosDisponibles(libros: Libro[]): Libro[] {
    return libros.filter(libro => libro.disponible === true);
}

// Consultar libros no disponibles
export function librosNoDisponibles(libros: Libro[]): Libro[] {
    return libros.filter(libro => libro.disponible === false);
}