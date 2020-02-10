"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imprimir(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == null) {
        }
        else {
            console.log("dato: " + array[i] + ", posicion: " + i);
        }
    }
    ;
    return;
}
exports.imprimir = imprimir;
