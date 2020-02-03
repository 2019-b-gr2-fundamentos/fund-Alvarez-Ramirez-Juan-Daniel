import * as fs from 'fs-extra';
import * as prompts from 'prompts';
import {juego} from './funcion-juego';
import {separarPalabras} from './funcion-separar-palabras';


export async function menu(){
    const numeroDeIntentosInicial = await prompts({
        type: 'number',
        name: 'numero',
        message: 'cuantos intentos quieres tener?'
    });
    const numeroDeIntentosDesicion = numeroDeIntentosInicial.numero;
    const arrayDePalabra = separarPalabras();
    const arrayDeAdivinacionEnBlanco = ["_","_","_","_"];
    let imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/1.txt','utf8');
    console.log(imagenAhorcado); 
    await juego(arrayDePalabra,0,arrayDeAdivinacionEnBlanco,numeroDeIntentosDesicion,numeroDeIntentosDesicion);

}
