import {imprimir} from './funcion-imprimir'
import {escoger} from '../arreglos-de-vectores'
import {escribirArhivo} from './funcion-escribir-archivo'
import * as prompts from 'prompts'

export async function actualizar(entrada){
    const array = entrada.datos;
    const formatoDeDato = [
        {
            type:'number',
            name: 'dato',
            message: 'ingrese un dato?'
        },
        {
            type:'number',
            name: 'posicion',
            message: 'ingrese la posicion'
        }
    ];
    const inputDatoPosicion = await prompts(formatoDeDato);
    array[inputDatoPosicion.posicion] = inputDatoPosicion.dato;
    console.log("arreglo actualizado");
    imprimir(array);
    escribirArhivo(array,entrada.nombre);
    const salida = {
        datos:array,
        nombre:entrada.dato
    }
    return salida;
}