"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
function datosIniciales() {
    var palabrasIniciales = fs.readFileSync('./datos/datos-iniciales.txt').toString();
    var arrayDePalabras = palabrasIniciales.split("\n");
    var arrayDeNumeros = arrayDePalabras.map(function (element) {
        var elementNumero = Number(element);
        return elementNumero;
    });
    return arrayDeNumeros;
}
exports.datosIniciales = datosIniciales;
