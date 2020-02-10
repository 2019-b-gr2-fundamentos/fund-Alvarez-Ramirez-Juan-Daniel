"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(arreglo, funcion, contador) {
    for (var i = 0; i < arreglo.length; i++) {
        contador = funcion(contador, arreglo[i], i, arreglo);
    }
    return contador;
}
exports.reduce = reduce;
