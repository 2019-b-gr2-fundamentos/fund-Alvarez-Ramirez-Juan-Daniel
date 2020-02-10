import * as prompts from 'prompts'
import {imprimir} from './funciones/funcion-imprimir'
import {crear} from './funciones/funcion-crear'
import {eliminar} from './funciones/funcion-eliminar'
import {actualizar} from './funciones/funcion-actualizar'
import { datosIniciales } from './datos-iniciales'
import {interfaceDatos} from './interface_datos/interface-datos'


export async function escoger(entrada){
    const escogerOpcion = await prompts({
        type: 'text',
        name: 'opcionEscogida',
        message: 'escoja una opcion crear[1], eliminar elemento[2], actualizar[3] o imprimir[4]'
    });
    const opcion = escogerOpcion.opcionEscogida;
    const es_crear = opcion == "1" || opcion == "crear[1]" || opcion == "crear"
    const es_eliminar = opcion == "2" || opcion == "eliminar elemento[2]" || opcion == "eliminar elemento"
    const es_actualizar = opcion == "3" || opcion == "actualizar[3]" || opcion == "actualizar"
    const es_imprimir = opcion == "4" || opcion == "imprimir arreglo[4]" || opcion == "imprimir arreglo"
    if( es_crear){
        let temp = await crear();
        entrada.nombre = temp.nombre;
        entrada.datos = temp.datos;
    }
    if( es_eliminar){
        let temp = await eliminar(entrada);
        entrada.nombre = temp.nombre;
        entrada.datos = temp.datos;
    }
    if( es_actualizar){
        let temp = await actualizar(entrada); 
        entrada.nombre = temp.nombre;
        entrada.datos = temp.datos;
    }
    if( es_imprimir){
        imprimir(entrada.datos);
    }
    if( opcion == "salir"){
        return;
    }
    escoger(entrada);
}

async function main(){
    const entrada:interfaceDatos = {
        datos:datosIniciales(),
        nombre:'./datos/datos-iniciales.txt'
    }
    escoger(entrada);
}
main();