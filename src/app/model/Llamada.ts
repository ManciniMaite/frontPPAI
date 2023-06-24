import { CambioEstado } from './CambioEstado';
import { Estado } from './Estado';
import { Accion } from './Accion';
import { Cliente } from './Cliente';
import { SubOpcionLlamada } from './SubOpcionLlamada';
import { OpcionLlamada } from './OpcionLlamada';
import { Usuario } from './Usuario';
import { RespuestaDeCliente } from './RespuestaDeCliente';
import { CategoriaLlamada } from './CategoriaLlamada';

export class Llamada {
    fechaHoraInicio: Date;
    fechaHoraFin: Date;
    descripcionOperador: string;
    detalleAccionRequerida: string;
    duracion: string;
    encuestaEnviada: string;
    observacionAuditor: string;
    
    cambioEstados: CambioEstado[];
    estadoActual: Estado;
    accionReqierida: Accion;
    cliente: Cliente;
    subOpcionSeleccionada: SubOpcionLlamada;
    opcionSeleccionada: OpcionLlamada;
    auditor: Usuario;
    operador: Usuario;
    respuestasDeEncuesta: RespuestaDeCliente[];
    categoria: CategoriaLlamada
  }
  
