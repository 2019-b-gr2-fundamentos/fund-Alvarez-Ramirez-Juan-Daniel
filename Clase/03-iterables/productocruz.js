function ProductoCruz(vectorUno, vectorDos) {
    var crossProduct = [];
    var result = 0;
    for (var i = 0; i < vectorUno.length - 1; i++) {
        var tempResultSuma_1 = vectorUno[i] * vectorDos[i + 1];
        var tempResultResta_1 = vectorDos[i] * vectorUno[i + 1];
        crossProduct.push(tempResultSuma_1 - tempResultResta_1);
    }
    var tempResultSuma = vectorUno[vectorUno.length - 1] * vectorDos[0];
    var tempResultResta = vectorDos[0] * vectorUno[vectorUno.length - 1];
    crossProduct.push(tempResultSuma - tempResultResta);
    crossProduct = Rotar(crossProduct);
    return crossProduct;
}
function ProductoCruzAltenativo(vectorUno, vectorDos) {
    var suma = 0;
    var result = 0;
    for (var i = 0; i < vectorUno.length - 1; i++) {
        var tempResultSuma_2 = vectorUno[i] * vectorDos[i + 1];
        suma = suma + tempResultSuma_2;
    }
    var tempResultSuma = vectorUno[vectorUno.length - 1] * vectorDos[0];
    suma = suma + tempResultSuma;
    return suma;
}
function Rotar(array) {
    var temp = array[array.length - 1];
    for (var i = array.length - 1; i = 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = temp;
    return array;
}
function imprimirArreglo(array) {
    var stringIndices = ["i", "j", "k", "l", "m", "n"];
    var stringArreglo = "";
    for (var i = 0; i < array.length - 1; i++) {
        stringArreglo = stringArreglo + array[i] + stringIndices[i] + " + ";
    }
    stringArreglo = stringArreglo + array[array.length - 1] + stringIndices[array.length - 1];
    console.log(stringArreglo);
}
function imprimirArregloAlternativo(array) {
    var stringArreglo = "[";
    for (var i = 0; i < array.length - 1; i++) {
        stringArreglo = stringArreglo + array[i] + ", ";
    }
    stringArreglo = stringArreglo + array[array.length - 1] + "]";
    console.log(stringArreglo);
}
function main() {
    var arregloA = [1, 2, 3, 4];
    var arregloB = [4, 5, 6, 7];
    var productoArreglos = ProductoCruz(arregloA, arregloB);
    var productoCruzAlternativoValor = ProductoCruzAltenativo(arregloA, arregloB);
    var productoCruzArreglosAlternativo = [0, 0, productoCruzAlternativoValor];
    imprimirArreglo(productoArreglos);
    imprimirArregloAlternativo(productoCruzArreglosAlternativo);
}
main();
