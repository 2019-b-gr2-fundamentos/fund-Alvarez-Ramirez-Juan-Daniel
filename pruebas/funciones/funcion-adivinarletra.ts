import * as prompts from 'prompts'

export async function adivinaLetra(arrayDePalabra,arrayDeAdivinacion){
    arrayDeAdivinacion.length = arrayDePalabra.length;
    const letraAdivinadaEntrada = await prompts({
        type: 'text',
        name: 'letra',
        message: 'ingresa una letra'
    });
    const letraAdivinada = letraAdivinadaEntrada.letra;
    const arrayResultado = arrayDePalabra
    .map( function(element,i){
        if(element == letraAdivinada){return element;}else{return arrayDeAdivinacion[i];}
        });
    return arrayResultado; 
}