import { Usuario } from "../Usuario";
import { EXAMPLE_Perfil } from "./data-Perfil";

export const EXAMPLE_Usuario: Usuario ={
    activo: true,
    fechaAlta: new Date('2022-05-20'),
    nombreUsuario: 'MaiteMancini',
    password: '123465',
    perfil: EXAMPLE_Perfil
}