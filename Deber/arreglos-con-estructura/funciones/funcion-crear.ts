import {imprimir} from './funcion-imprimir'
import * as prompts from 'prompts'

export async function crear(array){
    const longitud = await prompts({
        type: 'number',
        name: 'longitud',
        message: 'ingrese el tamaño del arreglo'
    });
    for (let i = 0; i < longitud.longitud; i++) {
        const datoDeEntrada = await prompts({
            type:'text',
            name:'dato',
            message:'Ingrese un valor a agregar'
        });
        array[i] = datoDeEntrada.dato;
    }
    imprimir(array);
    return array;
}