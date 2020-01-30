import {imprimir} from './funcion-imprimir'
import * as prompts from 'prompts'

export async function actualizar(array){
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
    return array;
}