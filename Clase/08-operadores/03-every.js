"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function every(arreglo, funcion) {
    var flag = true;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == false) {
            return false;
        }
    }
    return flag;
}
exports.every = every;
