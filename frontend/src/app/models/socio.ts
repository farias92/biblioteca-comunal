export interface Socio {
    readonly idSocio: number;
    nombre: string;
    telefono: string;
    correo: string;
    activo: boolean;
    tipoSocio: "general" | "estudiante";
}