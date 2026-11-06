export class TipoSocio {
    constructor(public nombre: string) {}

    descripcion(): string {
        return "Socio general";
    }
}

export class SocioEstudiante extends TipoSocio {
    override descripcion(): string {
        return "Socio estudiante";
    }
}