import * as fs from 'fs-extra'

export function separarPalabras(){
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