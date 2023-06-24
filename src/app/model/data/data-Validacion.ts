import { Validacion } from "../Validacion";
import { EXAMPLE_OpcionValidacion } from "./data-OpcionValidacion";
import { EXAMPLE_TipoInformacion } from "./data-tipoInformacion";

export const EXAMPLE_Validacion: Validacion = {
    audioMensajeValidacion: 'audio msj',
    nombre: 'Validacion',
    opcionesValidacion: [EXAMPLE_OpcionValidacion],
    tipo: EXAMPLE_TipoInformacion
}