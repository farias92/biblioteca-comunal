import type { Libro } from "./models/libro.js";
import type { Socio } from "./models/socio.js";
import type { Prestamo } from "./models/prestamo.js";
import { Repositorio } from "./utils/repositorio.js";
import { librosDisponibles, librosNoDisponibles } from "./utils/reglasLibros.js";
import { sociosActivos, sociosInactivos } from "./utils/reglasSocios.js";
import { prestamosActivos, prestamosDevueltos, prestamosPorSocio, validarPrestamo } from "./utils/reglasPrestamos.js";
import { TipoSocio, SocioEstudiante } from "./models/tiposSocio.js";

const repositorioLibros = new Repositorio<Libro>();

const libros: Libro[] = [
    { idLibro: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", disponible: true },
  { idLibro: 2, titulo: "Cocorí", autor: "Joaquín Gutiérrez", disponible: false },
  { idLibro: 3, titulo: "Orgullo y prejuicio", autor: "Jane Austen", disponible: true },
  { idLibro: 4, titulo: "Hábitos atómicos", autor: "James Clear", disponible: true },
  { idLibro: 5, titulo: "La isla del tesoro", autor: "Robert Louis Stevenson", disponible: true },
  { idLibro: 6, titulo: "Única mirando al mar", autor: "Fernando Contreras Castro", disponible: true },
  { idLibro: 7, titulo: "El alquimista", autor: "Paulo Coelho", disponible: false },
  { idLibro: 8, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", disponible: true }
];

libros.forEach(libro => repositorioLibros.agregar(libro));

console.log("Libros registrados:");
console.log(repositorioLibros.filtrar(libro => true));

const repositorioSocios = new Repositorio<Socio>();

const socios: Socio[] = [
     { idSocio: 1, nombre: "Fabian Arias", telefono: "8888-1234", correo: "farias@gmail.com", activo: true, tipoSocio: "general" },
    { idSocio: 2, nombre: "Kirsten Hoppe", telefono: "8777-2345", correo: "khoppe@outlook.com", activo: true, tipoSocio: "estudiante" },
    { idSocio: 3, nombre: "Mario Hernandez", telefono: "8666-3456", correo: "mhernandez@gmail.com", activo: true, tipoSocio: "general" },
    { idSocio: 4, nombre: "Valeria Fan", telefono: "8555-4567", correo: "vfan@outlook.com", activo: false, tipoSocio: "estudiante" },
    { idSocio: 5, nombre: "Jose Suarez", telefono: "8444-5678", correo: "jsuarez@outlook.com", activo: true, tipoSocio: "general" },
    { idSocio: 6, nombre: "Jarreth Mc Carthy", telefono: "8333-6789", correo: "jmccarthy@gmail.com", activo: true, tipoSocio: "estudiante" }
];

socios.forEach(socio => repositorioSocios.agregar(socio));

console.log("Socios registrados:");
console.log(repositorioSocios.filtrar(socio => true));

const prestamos: Prestamo[] = [
    { idPrestamo: 1, idLibro: 7, idSocio: 1, fechaPrestamo: "2026-10-28", estado: "activo" },
    { idPrestamo: 2, idLibro: 2, idSocio: 2, fechaPrestamo: "2026-11-02", estado: "activo" },
    { idPrestamo: 3, idLibro: 1, idSocio: 3, fechaPrestamo: "2026-10-20", fechaDevolucion: "2026-10-25", estado: "devuelto" },
    { idPrestamo: 4, idLibro: 5, idSocio: 5, fechaPrestamo: "2026-10-27", fechaDevolucion: "2026-11-01", estado: "devuelto" },
    { idPrestamo: 5, idLibro: 8, idSocio: 6, fechaPrestamo: "2026-10-30", fechaDevolucion: "2026-11-03", estado: "devuelto" }
];

const repositorioPrestamos = new Repositorio<Prestamo>();

prestamos.forEach(prestamo => repositorioPrestamos.agregar(prestamo));

console.log("Préstamos registrados:");
console.log(repositorioPrestamos.filtrar(prestamo => true));

console.log("\nREGLAS DE NEGOCIO");

// Reglas de libros
console.log("\n1. Libros disponibles:");
console.log(librosDisponibles(libros));

console.log("\n2. Libros no disponibles:");
console.log(librosNoDisponibles(libros));

// Reglas de socios
console.log("\n3. Socios activos:");
console.log(sociosActivos(socios));

console.log("\n4. Socios inactivos:");
console.log(sociosInactivos(socios));

// Reglas de prestamos
console.log("\n5. Prestamos activos:");
console.log(prestamosActivos(prestamos));

console.log("\n6. Prestamos devueltos:");
console.log(prestamosDevueltos(prestamos));

console.log("\n7. Prestamos del socio 1:");
console.log(prestamosPorSocio(prestamos, 1));

// Validar prestamos
console.log("\n8. Validacion de prestamos:");
console.log("Libro 1, socio 1:", validarPrestamo(libros, socios, 1, 1));
console.log("Libro 3, socio 1:", validarPrestamo(libros, socios, 3, 1));
console.log("Libro 1, socio 4:", validarPrestamo(libros, socios, 1, 4));

console.log("\nPOLIMORFISMO");

const tiposSocios: TipoSocio[] = socios.map(socio => {
    if (socio.tipoSocio === "estudiante") {
        return new SocioEstudiante(socio.nombre);
    }

    return new TipoSocio(socio.nombre);
});

tiposSocios.forEach(socio => {
    console.log(socio.nombre + ": " + socio.descripcion());
});

console.log("\nPRUEBAS DEL REPOSITORIO");

// Buscar un libro por su identificador
console.log("\nBuscar libro con ID 2:");
console.log(repositorioLibros.buscar(libro => libro.idLibro === 2));

// Eliminar un libro
console.log("\nEliminar libro con ID 8:");
repositorioLibros.eliminar(libro => libro.idLibro === 8);

// Mostrar los libros restantes
console.log("\nLibros restantes:");
console.log(repositorioLibros.filtrar(libro => true));