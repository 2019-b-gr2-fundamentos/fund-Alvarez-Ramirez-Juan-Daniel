import {leerArchivo} from "./02-archivosLeer";
import {escribirArchivo} from "./03-escribirarchivo";

function main(){
    let path = './ejemplo.txt' 
    const textoLeido = leerArchivo(path);
    const nuevoContendido = "tengo hambre \n";
    escribirArchivo(path,'');
    console.log(textoLeido+ nuevoContendido);
}

main();