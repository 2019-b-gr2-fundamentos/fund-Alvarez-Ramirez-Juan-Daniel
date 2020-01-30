import {imprimir} from './funcion-imprimir'
import * as prompts from 'prompts'

export async function eliminar(array){
    const posicionEntrada = await prompts({
        type: 'number',
        name: 'posicion',
        message: 'ingrese la posicion a eliminar'
    });
    for (let i = posicionEntrada.posicion; i < array.length-1; i++) {
        array[i]= array[i+1];
    }
    array.pop();
    imprimir(array);
    return array;
}