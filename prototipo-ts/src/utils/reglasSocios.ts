import type { Socio } from "../models/socio.js";

// Consultar socios activos
export function sociosActivos(socios: Socio[]): Socio[] {
    return socios.filter(socio => socio.activo === true);
}

// Consultar socios inactivos
export function sociosInactivos(socios: Socio[]): Socio[] {
    return socios.filter(socio => socio.activo === false);
}