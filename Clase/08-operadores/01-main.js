"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_filter_1 = require("./02-filter");
var _03_every_1 = require("./03-every");
var _04_some_1 = require("./04-some");
var _04_forEach_1 = require("./04-forEach");
var _05_map_1 = require("./05-map");
var _06_reduce_1 = require("./06-reduce");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Daniel", nota: 7 },
        { id: 2, nombre: "Vicente", nota: 6 },
        { id: 3, nombre: "Wendy", nota: 4 },
        { id: 4, nombre: "Carolina", nota: 9 },
        { id: 5, nombre: "Carlos", nota: 10 }
    ];
    //OPERADOR FOREACH
    /*
    Enviamos -> NADA
    Recibimos -> NADA
    */
    arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        //valorActual.nota = valorActual.nota * 2;
    });
    //OPERADOR MAP -> TRANSFORMAR EL ARREGLO
    /*
    Enviamos  -> Valor Actual Modificado
    Recibimos -> Nuevo Arreglo Con Valor Modificados
    */
    var respuestaDelMap = arregloEstudiantes.map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            //nota:valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    //OPERADOR FILTER -> filtra el arreglo 
    /*
    Enviamos  -> Condicion
    Recibimos -> Nuevo Arreglo con los Valores filtrados
    */
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota > 7;
        var condicion5 = valorActual.nota < 5;
        return condicion7 || condicion5;
    });
    var respuestaFilterNombre = arregloEstudiantes.filter(function (valorActual) {
        var condicion4 = !valorActual.nombre.search("Daniel");
        return condicion4;
    });
    //OPERADOR SOME -> si agluno cumple TRUE, si ninguno cumple FALSE
    /*
    Enviamos  -> Condicion
    Recibimos -> Booleano
    */
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    //OPERADOR EVERY -> si todos cumplen TRUE, si alguno no cumple FALSE
    /*
    Enviamos  -> Condicion
    Recibimos -> Booleano
    */
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    //OPERADOR REDUCE -> Aplica el calculo a cada iteracion y devuleve un valor (principio a fin)
    //OPERADOR REDUCEREIGHT -> DEL FIN AL PRINCIPIO
    /*
    Enviamos  -> Calculo
    Recibimos -> Valor
    */
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual, i, arreglo) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 // VALOR INICIAL DEL ACUMULADOR
    );
    //console.log("respuestaDelForEach", respuestaDelForEach);
    //console.log("respuestaDelMap", respuestaDelMap)
    //console.log("respuestaFilter", respuestaFilter);
    //console.log("respuestaSome", respuestaSome);
    //console.log("respeustaFilterNombre", respuestaFilterNombre);
    //console.log("respuestaEvery:", respuestaEvery);
    console.log("respuestaReduce", respuestaReduce);
    var respuestaFilterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual) {
        return valorActual.nota == 7;
    });
    var respuestaEveryNuestro = _03_every_1.every(arregloEstudiantes, function (valorActual) {
        return valorActual.nota > 3;
    });
    var respuestaSomeNuestro = _04_some_1.some(arregloEstudiantes, function (valorActual) {
        return valorActual.nota == 0;
    });
    _04_forEach_1.forEach(arregloEstudiantes, function (valorActual) {
        //valorActual.nota = valorActual.nota*10;
    });
    var respuestaDelMapNuestro = _05_map_1.map(arregloEstudiantes, function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            //nota:valorActual.nota,
            nota20: valorActual.nota * 3
        };
        return nuevoObjeto;
    });
    var respuestaDelReduceNuestro = _06_reduce_1.reduce(arregloEstudiantes, function (acumulador, valorActual, i, arreglo) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0);
    //console.log("respuestaFilterNuestro:",respuestaFilterNuestro);
    //console.log("respuestaEveryNuestro:", respuestaEveryNuestro);
    //console.log("respuestaSomeNuestro:", respuestaSomeNuestro);
    //console.log("respuestaDelForEachNuestro\n", arregloEstudiantes)
    //console.log("respuestaDelMapNUestro", respuestaDelMapNuestro);
    console.log("arregloEstudiantes\n", arregloEstudiantes);
    //console.log("respuestaDelReduceNuestro\n", respuestaDelReduceNuestro);
}
main();
