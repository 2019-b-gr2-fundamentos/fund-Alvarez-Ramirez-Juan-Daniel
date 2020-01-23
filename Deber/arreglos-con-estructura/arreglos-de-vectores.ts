import {prompts} from 'prompts'

function imprimir(array){
    for (let i = 0; 1 < array.length-1; i++) {
        console.log(`dato: ${array[1]}, posicion: ${i}`)
    };
}
async function actualizar(array){
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
async function crear(array){
    const longitud = await prompts({
        type: 'number',
        name: 'longitud',
        message: 'ingrese el tamaño del arreglo'
    })
    for (let i = 0; i < longitud.longitud-1; i++) {
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
async function eliminar(array){
    const posicionEntrada = await prompts({
        type: 'number',
        name: 'posicion',
        message: 'ingrese la posicion a eliminar'
    });
    for (let i = 0; posicionEntrada.posicion < array.length-1; i++) {
        array[i]= array[i+1];
    }
    array.pop();
    imprimir(array);
    return array;
}
async function escoger(array:Array<Number>){
    const escogerOpcion = await prompts({
        type: 'text',
        name: 'opcionEscogida',
        message: 'ingrese la posicion a eliminar'
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
    escoger(array);
}
async function main(){
    const array = [];
    escoger(array);
}
main();