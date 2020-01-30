import * as prompts from 'prompts'
import {imprimir} from './funciones/funcion-imprimir'
import {crear} from './funciones/funcion-crear'
import {eliminar} from './funciones/funcion-eliminar'
import {actualizar} from './funciones/funcion-actualizar'


async function escoger(array:Array<Number>){
    const escogerOpcion = await prompts({
        type: 'text',
        name: 'opcionEscogida',
        message: 'escoja una opcion crear[1], eliminar elemento[2] o actualizar[3]'
    });
    const opcion = escogerOpcion.opcionEscogida;
    const es_crear = opcion == "1" || opcion == "crear[1]" || opcion == "crear"
    const es_eliminar = opcion == "2" || opcion == "eliminar elemento[2]" || opcion == "eliminar elemento"
    const es_actualizar = opcion == "3" || opcion == "actualizar[3]" || opcion == "actualizar"
    const es_imprimir = opcion == "4" || opcion == "imprimir arreglo[4]" || opcion == "imprimir arreglo"
    if( es_crear){
        array = await crear(array);
    }
    if( es_eliminar){
        array = await eliminar(array);
    }
    if( es_actualizar){
        array = await actualizar(array);     
    }
     if( es_imprimir){
        imprimir(array);
    }
    if( opcion == "salir"){
        return;
    }
    escoger(array);
}
async function main(){
    const array = [];
    escoger(array);
}
main();