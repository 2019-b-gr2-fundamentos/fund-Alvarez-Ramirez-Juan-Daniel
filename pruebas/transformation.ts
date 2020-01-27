import * as fs from './node_modules/fs-extra';

const numeroDeIntentosInicial = 10
for (let numeroDeIntentos = 0; numeroDeIntentos < numeroDeIntentosInicial; numeroDeIntentos++) {

    const numberImage = Math.floor((numeroDeIntentos/numeroDeIntentosInicial)*6+1);
    let imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/'+numberImage+'.txt','utf8');
    console.log(imagenAhorcado); 

}




