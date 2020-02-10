"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function some(arreglo, funcion) {
    var flag = false;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            return true;
        }
    }
    return flag;
}
exports.some = some;
