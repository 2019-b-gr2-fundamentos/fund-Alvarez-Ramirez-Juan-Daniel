"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
function separarPalabras() {
    var palabrasIniciales = fs.readFileSync('./ahorcado_palabras/ahorcado_palabras.txt').toString();
    var arrayDePalabras = palabrasIniciales.split(" ");
    var arrayDeArrayDePalabras = arrayDePalabras
        .map(function (element) {
        return element.split("");
    });
    return arrayDeArrayDePalabras;
}
exports.separarPalabras = separarPalabras;
