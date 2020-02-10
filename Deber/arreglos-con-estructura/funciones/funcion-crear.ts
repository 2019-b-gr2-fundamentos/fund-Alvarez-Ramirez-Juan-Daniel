import {imprimir} from './funcion-imprimir'
import {escoger} from '../arreglos-de-vectores'
import {escribirArhivo} from './funcion-escribir-archivo'
import * as prompts from 'prompts'
import * as fs from 'fs-extra'

export async function crear(){
    const array = [];
    const longitud = await prompts({
        type: 'number',
        name: 'longitud',
        message: 'ingrese el tamaño del arreglo'
    });
    for (let i = 0; i < longitud.longitud; i++) {
        const datoDeEntrada = await prompts({
            type:'number',
            name:'dato',
            message:'Ingrese un valor a agregar'
        });
        array[i] = datoDeEntrada.dato;
    }
    const nombreDeNuevoArray = await  prompts({
        type:'text',
        name:'dato',
        message:'Ingrese el nombre con el que quiere guardar los datos'
    });    
    imprimir(array);
    escribirArhivo(array,nombreDeNuevoArray.dato);
    const arrayFile = {
        array, 
        nombreDeNuevoArray
    }
    const salida = {
        datos:array,
        nombre:nombreDeNuevoArray.dato
    }
    return salida;
}