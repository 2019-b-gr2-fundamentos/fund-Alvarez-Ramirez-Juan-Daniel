import * as fs from './node_modules/fs-extra';
import * as prompts from 'prompts'


function iniciarJuego(numeroDeIntentosInicial){
    for (let numeroDeIntentos = 0; numeroDeIntentos < numeroDeIntentosInicial; numeroDeIntentos++) {
        
        const numberImage = Math.floor((numeroDeIntentos/numeroDeIntentosInicial)*6+1);
        let imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/'+numberImage+'.txt','utf8');
        console.log(imagenAhorcado); 
    
    }
}

async function adivinaLetra(stringEntrada:string){
    const arrayDePalabra = stringEntrada.split("");
    const letraAdivinadaEntrada = await prompts({
        type: 'text',
        name: 'letra',
        message: 'ingresa una letra'
    });
    const letraAdivinada = letraAdivinadaEntrada.letra;
    const arrayDeAdivinacion = arrayDePalabra.forEach(element => {
        if(element == letraAdivinada){element}else{"_"}
        });
    return arrayDeAdivinacion; 

}


async function main(){
/*
    const numeroDeIntentosInicial = await prompts({
        type: 'text',
        name: 'numero',
        message: 'cuantos intentos quieres tener?'
    });
    iniciarJuego(numeroDeIntentosInicial.numero);
*/
    console.log(adivinaLetra("hola"));
}
main();







