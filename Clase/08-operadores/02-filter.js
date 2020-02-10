"use strict";
/*export function calcular(funcion, numUno, numDos){
    return funcion(numUno, numDos);
}
export function sumar(numUno, numDos){
    return numUno + numDos;
}
export function restar(numUno, numDos){
    return numUno - numDos;
}
console.log("Respuesta de la suma",calcular(sumar, 1, 2));
console.log("Resouesta de la resta",calcular(
    function(numUno,numDos, valorInicial){
        return numUno - numDos
    },
    5,
    3
));
console.log("Respuesta de la resta", calcular(restar, 1, 2));*/
Object.defineProperty(exports, "__esModule", { value: true });
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
