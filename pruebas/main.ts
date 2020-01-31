import * as fs from 'fs-extra';
import * as prompts from 'prompts';
import {juego} from './funciones/funcion-juego';
import {separarPalabras} from './funciones/funcion-separar-palabras';





async function main(){
    const numeroDeIntentosInicial = await prompts({
        type: 'text',
        name: 'numero',
        message: 'cuantos intentos quieres tener?'
    });
    const numeroDeIntentosDesicion = numeroDeIntentosInicial.numero;
    const arrayDePalabra = separarPalabras();
    const arrayDeAdivinacionEnBlanco = ["_","_","_","_"];
    await juego(arrayDePalabra,0,arrayDeAdivinacionEnBlanco,numeroDeIntentosDesicion,numeroDeIntentosDesicion);

}
main();







