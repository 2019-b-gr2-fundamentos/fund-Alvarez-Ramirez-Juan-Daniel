"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(path, contenido) {
    console.log("leer archivo");
    var resultado = fs.readFileSync(path, contenido, 'utf-8');
}
exports.escribirArchivo = escribirArchivo;
