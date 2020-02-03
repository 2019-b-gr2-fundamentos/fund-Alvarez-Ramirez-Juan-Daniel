import * as fs from {'fs-extra'}

export function(){
    const palabrasIniciales:string = fs.readFileSync('C:/Users/USREPS/Documents/GitHub/fund-Alvarez-Ramirez-Juan-Daniel/Deber/arreglos-con-estructura/datos-iniciales/datos-iniciales.txt').toString();
    const arrayDePalabras = palabrasIniciales.split("\n");
    return arrayDePalabras;
}

