import {adivinaLetra} from './funcion-adivinarletra'
import * as fs from 'fs-extra'

export async function juego(arrayDeArraysPalabra:string[][],
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