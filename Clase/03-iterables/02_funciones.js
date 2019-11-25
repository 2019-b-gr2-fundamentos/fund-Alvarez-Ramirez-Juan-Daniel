function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function calculadora() {
    var operacion = prompt('Selecciona una opcion: Suma[1], Resta[2], multiplicacion[3], division[4], cerrar[5]');
    var esSuma = operacion == "1" ||
        operacion == "Suma" ||
        operacion == "Suma[1]";
    var esResta = operacion == "2" ||
        operacion == "Resta" ||
        operacion == "Resta[2]";
    var esDivision = operacion == "3" ||
        operacion == "multiplicacion" ||
        operacion == "multiplicacion[3]";
    var esMultiplicacion = operacion == "4" ||
        operacion == "division" ||
        operacion == "division[4]";
    if (esSuma || esMultiplicacion || esDivision || esResta) {
        var numeroUno = Number(prompt("ingrese el numero uno"));
        var numeroDos = Number(prompt("ingrese el numero dos"));
        if (esSuma) {
            console.log(sumar(numeroDos, numeroUno));
        }
        if (esResta) {
            console.log(restar(numeroUno, numeroDos));
        }
        if (esMultiplicacion) {
            console.log(multiplicar(numeroUno, numeroDos));
        }
        if (esDivision) {
            console.log(dividir(numeroUno, numeroDos));
        }
        calculadora();
    }
    else if (operacion == "5") {
        console.log("adios");
    }
    else {
        calculadora();
    }
    return;
}

function main() {
    calculadora();
}
