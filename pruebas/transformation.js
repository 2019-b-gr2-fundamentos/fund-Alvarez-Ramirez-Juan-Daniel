"use strict";
exports.__esModule = true;
var fs = require("./node_modules/fs-extra");
var numeroDeIntentosInicial = 10;
for (var numeroDeIntentos = 1; numeroDeIntentos < numeroDeIntentosInicial; numeroDeIntentos++) {
    var numberImage = Math.floor(numeroDeIntentos / numeroDeIntentosInicial * 6);
    var imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/' + numberImage + '.txt', 'utf8');
    console.log(imagenAhorcado);
}
