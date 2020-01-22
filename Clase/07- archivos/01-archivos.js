"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_archivosLeer_1 = require("./02-archivosLeer");
var _03_escribirarchivo_1 = require("./03-escribirarchivo");
function main() {
    var path = './ejemplo.txt';
    var textoLeido = _02_archivosLeer_1.leerArchivo(path);
    var nuevoContendido = "tengo hambre \n";
    _03_escribirarchivo_1.escribirArchivo(path, '');
    console.log(textoLeido + nuevoContendido);
}
main();
