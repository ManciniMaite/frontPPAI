import { CambioEstado } from "../CambioEstado";
import { EXAMPLE_Estado } from "./data-Estado";

export const EXAMPLE_CambioEstado : CambioEstado = {
    estado: EXAMPLE_Estado,
    fechaHoraFin: new Date('2023-06-25'),
    fechaHoraInicio: new Date('2023-06-24')
}