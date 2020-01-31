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
exports.__esModule = true;
var fs = require("./node_modules/fs-extra");
var prompts = require("prompts");
function juego(arrayDeArraysPalabra, indiceDeArrayPalabra, arrayAdivinacion, numeroDeIntentosActual, numeroDeIntentosTotal) {
    return __awaiter(this, void 0, void 0, function () {
        var yaNoQuedanTurnos, nuevoArrayDeAdivinacion, numberImage, imagenAhorcado, palabraTerminada, adivinacionCorrecta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    yaNoQuedanTurnos = numeroDeIntentosActual == 0;
                    if (yaNoQuedanTurnos) {
                        console.log("perdiste despues de completar " + indiceDeArrayPalabra + " palabras");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, adivinaLetra(arrayDeArraysPalabra[indiceDeArrayPalabra], arrayAdivinacion)];
                case 1:
                    nuevoArrayDeAdivinacion = _a.sent();
                    numberImage = Math.floor(((numeroDeIntentosTotal - numeroDeIntentosActual) / numeroDeIntentosTotal) * 6 + 1);
                    imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/' + numberImage + '.txt', 'utf8');
                    console.log(imagenAhorcado);
                    console.log(nuevoArrayDeAdivinacion);
                    palabraTerminada = nuevoArrayDeAdivinacion.every(function (element, i) {
                        var comparison = element == arrayDeArraysPalabra[indiceDeArrayPalabra][i];
                        return comparison;
                    });
                    adivinacionCorrecta = nuevoArrayDeAdivinacion.some(function (element, i) {
                        var comparison = element != arrayAdivinacion[i];
                        return comparison;
                    });
                    if (palabraTerminada) {
                        console.log("Palabra terminada");
                        indiceDeArrayPalabra++;
                        nuevoArrayDeAdivinacion = [];
                        arrayDeArraysPalabra[indiceDeArrayPalabra]
                            .forEach(function (element) {
                            nuevoArrayDeAdivinacion.push('_');
                        });
                    }
                    if (adivinacionCorrecta && !yaNoQuedanTurnos) {
                        juego(arrayDeArraysPalabra, indiceDeArrayPalabra, nuevoArrayDeAdivinacion, numeroDeIntentosActual, numeroDeIntentosTotal);
                    }
                    if (!adivinacionCorrecta && !yaNoQuedanTurnos) {
                        juego(arrayDeArraysPalabra, indiceDeArrayPalabra, nuevoArrayDeAdivinacion, numeroDeIntentosActual - 1, numeroDeIntentosTotal);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function adivinaLetra(arrayDePalabra, arrayDeAdivinacion) {
    return __awaiter(this, void 0, void 0, function () {
        var letraAdivinadaEntrada, letraAdivinada, arrayResultado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arrayDeAdivinacion.length = arrayDePalabra.length;
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'letra',
                            message: 'ingresa una letra'
                        })];
                case 1:
                    letraAdivinadaEntrada = _a.sent();
                    letraAdivinada = letraAdivinadaEntrada.letra;
                    arrayResultado = arrayDePalabra
                        .map(function (element, i) {
                        if (element == letraAdivinada) {
                            return element;
                        }
                        else {
                            return arrayDeAdivinacion[i];
                        }
                    });
                    return [2 /*return*/, arrayResultado];
            }
        });
    });
}
function separarPalabras() {
    var palabrasIniciales = fs.readFileSync('./ahorcado_palabras/ahorcado_palabras.txt').toString();
    var arrayDePalabras = palabrasIniciales.split(" ");
    var arrayDeArrayDePalabras = arrayDePalabras
        .map(function (element) {
        return element.split("");
    });
    return arrayDeArrayDePalabras;
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var numeroDeIntentosInicial, numeroDeIntentosDesicion, arrayDePalabra, arrayDeAdivinacionEnBlanco;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'numero',
                        message: 'cuantos intentos quieres tener?'
                    })];
                case 1:
                    numeroDeIntentosInicial = _a.sent();
                    numeroDeIntentosDesicion = numeroDeIntentosInicial.numero;
                    arrayDePalabra = separarPalabras();
                    arrayDeAdivinacionEnBlanco = ["_", "_", "_", "_"];
                    return [4 /*yield*/, juego(arrayDePalabra, 0, arrayDeAdivinacionEnBlanco, numeroDeIntentosDesicion, numeroDeIntentosDesicion)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();
