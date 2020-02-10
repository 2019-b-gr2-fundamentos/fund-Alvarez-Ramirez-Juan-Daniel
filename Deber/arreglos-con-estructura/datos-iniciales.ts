import * as fs from 'fs-extra'

export function datosIniciales():number[]{
    const palabrasIniciales:string = fs.readFileSync('./datos/datos-iniciales.txt').toString();
    const arrayDePalabras = palabrasIniciales.split("\n");
    const arrayDeNumeros = arrayDePalabras.map(
        function(element){
            let elementNumero = Number(element);
            return elementNumero
        }
    );
    return arrayDeNumeros;
}

