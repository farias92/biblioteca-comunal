export interface Prestamo {
    readonly idPrestamo: number;
    idLibro: number;
    idSocio: number;
    fechaPrestamo: string;
    fechaDevolucion?: string;
    estado: "activo" | "devuelto";
}