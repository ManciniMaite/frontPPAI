import { Llamada } from "../Llamada";
import { EXAMPLE_ACCION } from "./data-Accion";
import { EXAMPLE_CambioEstado } from "./data-CambioEstado";
import { EXAMPLE_CatLlamada } from "./data-CategoriaLlamada";
import { EXAMPLE_Cliente } from "./data-Cliente";
import { EXAMPLE_Estado } from "./data-Estado";
import { EXAMPLE_OpcionLlamada } from './data-OpcionLlamada';
import { EXAMPLE_RtaDeCliente } from "./data-RespuestaDeCliente";
import { EXAMPLE_SubOpcionLlamada } from "./data-SubOpcionLlamada";
import { EXAMPLE_Usuario } from "./data-Usuario";

export const EXAMPLE_Llamada: Llamada = {
    fechaHoraFin: new Date(),
    fechaHoraInicio: new Date(),
    descripcionOperador: '',
    detalleAccionRequerida: '',
    duracion: '30min',
    encuestaEnviada: 'encuesta',
    observacionAuditor: 'observacion',

    cambioEstados: [EXAMPLE_CambioEstado],
    estadoActual: EXAMPLE_Estado,
    accionReqierida: EXAMPLE_ACCION,
    opcionSeleccionada: EXAMPLE_OpcionLlamada,
    subOpcionSeleccionada: EXAMPLE_SubOpcionLlamada,
    cliente: EXAMPLE_Cliente,
    auditor: EXAMPLE_Usuario,
    operador: EXAMPLE_Usuario,
    respuestasDeEncuesta: [EXAMPLE_RtaDeCliente],
    categoria: EXAMPLE_CatLlamada
}