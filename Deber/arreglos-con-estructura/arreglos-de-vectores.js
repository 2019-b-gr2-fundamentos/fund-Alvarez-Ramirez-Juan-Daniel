"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts_1 = require("prompts");
function imprimir(array) {
    for (var i = 0; 1 < array.length - 1; i++) {
        console.log("dato: " + array[1] + ", posicion: " + i);
    }
    ;
}
function actualizar(array) {
    return __awaiter(this, void 0, void 0, function () {
        var formatoDeDato, inputDatoPosicion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formatoDeDato = [
                        {
                            type: 'number',
                            name: 'dato',
                            message: 'ingrese un dato?'
                        },
                        {
                            type: 'number',
                            name: 'posicion',
                            message: 'ingrese la posicion'
                        }
                    ];
                    return [4 /*yield*/, prompts_1.prompts(formatoDeDato)];
                case 1:
                    inputDatoPosicion = _a.sent();
                    array[inputDatoPosicion.posicion] = inputDatoPosicion.dato;
                    console.log("arreglo actualizado");
                    imprimir(array);
                    return [2 /*return*/, array];
            }
        });
    });
}
function crear(array) {
    return __awaiter(this, void 0, void 0, function () {
        var longitud, i, datoDeEntrada;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts_1.prompts({
                        type: 'number',
                        name: 'longitud',
                        message: 'ingrese el tamaño del arreglo'
                    })];
                case 1:
                    longitud = _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < longitud.longitud - 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prompts_1.prompts({
                            type: 'text',
                            name: 'dato',
                            message: 'Ingrese un valor a agregar'
                        })];
                case 3:
                    datoDeEntrada = _a.sent();
                    array[i] = datoDeEntrada.dato;
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    imprimir(array);
                    return [2 /*return*/, array];
            }
        });
    });
}
function eliminar(array) {
    return __awaiter(this, void 0, void 0, function () {
        var posicionEntrada, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts_1.prompts({
                        type: 'number',
                        name: 'posicion',
                        message: 'ingrese la posicion a eliminar'
                    })];
                case 1:
                    posicionEntrada = _a.sent();
                    for (i = 0; posicionEntrada.posicion < array.length - 1; i++) {
                        array[i] = array[i + 1];
                    }
                    array.pop();
                    imprimir(array);
                    return [2 /*return*/, array];
            }
        });
    });
}
function escoger(array) {
    return __awaiter(this, void 0, void 0, function () {
        var escogerOpcion, opcion, es_crear, es_eliminar, es_actualizar, es_imprimir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts_1.prompts({
                        type: 'text',
                        name: 'opcionEscogida',
                        message: 'ingrese la posicion a eliminar'
                    })];
                case 1:
                    escogerOpcion = _a.sent();
                    opcion = escogerOpcion.opcionEscogida;
                    es_crear = opcion == "1" || opcion == "crear[1]" || opcion == "crear";
                    es_eliminar = opcion == "2" || opcion == "eliminar elemento[2]" || opcion == "eliminar elemento";
                    es_actualizar = opcion == "3" || opcion == "actualizar[3]" || opcion == "actualizar";
                    es_imprimir = opcion == "4" || opcion == "imprimir arreglo[4]" || opcion == "imprimir arreglo";
                    if (!es_crear) return [3 /*break*/, 3];
                    return [4 /*yield*/, crear(array)];
                case 2:
                    array = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!es_eliminar) return [3 /*break*/, 5];
                    return [4 /*yield*/, eliminar(array)];
                case 4:
                    array = _a.sent();
                    _a.label = 5;
                case 5:
                    if (!es_actualizar) return [3 /*break*/, 7];
                    return [4 /*yield*/, actualizar(array)];
                case 6:
                    array = _a.sent();
                    _a.label = 7;
                case 7:
                    if (es_imprimir) {
                        imprimir(array);
                    }
                    escoger(array);
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var array;
        return __generator(this, function (_a) {
            array = [];
            escoger(array).then().catch();
            return [2 /*return*/];
        });
    });
}
main();
