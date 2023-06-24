import { OpcionLlamada } from "../OpcionLlamada";
import { EXAMPLE_SubOpcionLlamada } from "./data-SubOpcionLlamada";
import { EXAMPLE_Validacion } from "./data-Validacion";

export const EXAMPLE_OpcionLlamada : OpcionLlamada={
    audioMensajeSubOpcion: 'audio',
    mensajeSubOpcion: 'mensaje',
    nombre: 'Opcion Llamada',
    nroOrden: 1,
    validacionRequerida: [EXAMPLE_Validacion],
    subOpcionLlamada: [EXAMPLE_SubOpcionLlamada]
}