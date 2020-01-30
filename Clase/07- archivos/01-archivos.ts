import {leerArchivo} from "./02-archivosLeer";
import {escribirArchivo} from "./03-escribirarchivo";
import {Estudiante} from './interfaces/estudiante.interface'
import * as prompts from 'prompts'

async function main(){
    let contador = 1;
    const arregloEstudiante:Estudiante[] = [];
    const arregloPreguntas = [ 
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }        
    ]
    const respuestaEstudiante = await prompts(arregloPreguntas);
    console.log(respuestaEstudiante);
}

main();