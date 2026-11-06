export class Repositorio<T extends object> {

    private registros: T[] = [];

    agregar(registro: T): void {
        this.registros.push(registro);
    }

    buscar(condicion: (registro: T) => boolean): T | undefined {
        return this.registros.find(condicion);
    }

    eliminar(condicion: (registro: T) => boolean): void {
        this.registros = this.registros.filter(registro => !condicion(registro));
    }

    filtrar(condicion: (registro: T) => boolean): T[] {
        return this.registros.filter(condicion);
    }
}