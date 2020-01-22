"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
function main() {
    obtenerDatosDeAnimalPerritoSincrona();
}
function obtenerDatosDeAnimalPerritoSincrona() {
    console.log("Inicio");
    var preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'string',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'string',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        },
    ];
    var respuestaEdad = yield prompts(preguntas);
    console.log('Respuesta', respuestaEdad);
    console.log('Fin');
}
