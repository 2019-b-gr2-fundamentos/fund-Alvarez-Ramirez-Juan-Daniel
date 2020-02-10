import {imprimir} from './funcion-imprimir'
import {escoger} from '../arreglos-de-vectores'
import * as prompts from 'prompts'
import {escribirArhivo} from './funcion-escribir-archivo'

export async function eliminar(entrada){
    const array = entrada.datos;
    const posicionEntrada = await prompts({
        type: 'number',
        name: 'posicion',
        message: 'ingrese la posicion a eliminar'
    });
    const arrayFiltrado = array.filter(
        function(array,index){
            return index != posicionEntrada.posicion;
        }
    );
    imprimir(arrayFiltrado);
    escribirArhivo(arrayFiltrado,entrada.nombre)
    const salida = {
        datos:array,
        nombre:entrada.nombre
    }
    return salida;
}