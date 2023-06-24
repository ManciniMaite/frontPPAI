import { SubOpcionLlamada } from "./SubOpcionLlamada";
import { Validacion } from "./Validacion";

export class OpcionLlamada {
    audioMensajeSubOpcion: string;
    mensajeSubOpcion: string;
    nombre: string;
    nroOrden: number;
    
    validacionRequerida: Validacion[];
    subOpcionLlamada: SubOpcionLlamada[];
}