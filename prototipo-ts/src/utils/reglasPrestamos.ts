import type { Prestamo } from "../models/prestamo.js";
import type { Libro } from "../models/libro.js";
import type { Socio } from "../models/socio.js";

// Consultar prestamos activos
export function prestamosActivos(prestamos: Prestamo[]): Prestamo[] {
    return prestamos.filter(prestamo => prestamo.estado === "activo");
}

// Consultar prestamos devueltos
export function prestamosDevueltos(prestamos: Prestamo[]): Prestamo[] {
    return prestamos.filter(prestamo => prestamo.estado === "devuelto");
}

// Consultar prestamos de un socio
export function prestamosPorSocio(prestamos: Prestamo[], idSocio: number): Prestamo[] {
    return prestamos.filter(prestamo => prestamo.idSocio === idSocio);
}

// Validar si se puede realizar un prestamo
export function validarPrestamo(libros: Libro[], socios: Socio[], idLibro: number, idSocio: number): boolean {
    const libro = libros.find(libro => libro.idLibro === idLibro);
    const socio = socios.find(socio => socio.idSocio === idSocio);

    if (libro === undefined || socio === undefined) {
        return false;
    }

    if (libro.disponible === false || socio.activo === false) {
        return false;
    }

    return true;
}