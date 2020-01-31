import * as fs from './node_modules/fs-extra';
import * as prompts from 'prompts'


async function juego(arrayDeArraysPalabra:string[][],
                indiceDeArrayPalabra:number,
                arrayAdivinacion:string[],
                 numeroDeIntentosActual:number,
                 numeroDeIntentosTotal:number){
        
        const yaNoQuedanTurnos = numeroDeIntentosActual == 0;
        if(yaNoQuedanTurnos){
            console.log("perdiste despues de completar "+ indiceDeArrayPalabra+" palabras");
            return;
        }
        let nuevoArrayDeAdivinacion:string[] = await adivinaLetra(arrayDeArraysPalabra[indiceDeArrayPalabra],arrayAdivinacion);
        const numberImage = Math.floor(((numeroDeIntentosTotal-numeroDeIntentosActual)/numeroDeIntentosTotal)*6+1);
        let imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/'+numberImage+'.txt','utf8');
        console.log(imagenAhorcado); 
        console.log(nuevoArrayDeAdivinacion);

        const palabraTerminada = nuevoArrayDeAdivinacion.every(
            function(element,i){
                const comparison = element == arrayDeArraysPalabra[indiceDeArrayPalabra][i];
                return comparison;
            }
        );

        const adivinacionCorrecta = nuevoArrayDeAdivinacion.some(
            function(element,i){
                const comparison = element != arrayAdivinacion[i];
                return comparison;
            }
        ); 

        if(palabraTerminada){
            console.log("Palabra terminada")
            indiceDeArrayPalabra++;
            nuevoArrayDeAdivinacion = [];
            arrayDeArraysPalabra[indiceDeArrayPalabra]
            .forEach(
                function(element){
                    nuevoArrayDeAdivinacion.push('_');
                }
            )

        }
        if(adivinacionCorrecta && !yaNoQuedanTurnos){
            juego(arrayDeArraysPalabra,indiceDeArrayPalabra,nuevoArrayDeAdivinacion,numeroDeIntentosActual,numeroDeIntentosTotal);
        }
        if(!adivinacionCorrecta && !yaNoQuedanTurnos){
            juego(arrayDeArraysPalabra,indiceDeArrayPalabra,nuevoArrayDeAdivinacion,numeroDeIntentosActual-1,numeroDeIntentosTotal);
        } 

}

async function adivinaLetra(arrayDePalabra,arrayDeAdivinacion){
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
function separarPalabras(){
    const palabrasIniciales:string = fs.readFileSync('./ahorcado_palabras/ahorcado_palabras.txt').toString();
    const arrayDePalabras = palabrasIniciales.split(" ");
    const arrayDeArrayDePalabras = arrayDePalabras
    .map(
        function(element){
            return element.split("");
        }
    );
    return arrayDeArrayDePalabras;
}

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







