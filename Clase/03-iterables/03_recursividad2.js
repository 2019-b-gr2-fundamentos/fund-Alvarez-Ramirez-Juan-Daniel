function equals(matOne, matTwo) {
    if (!dimensionesIguales(matOne, matTwo)) {
        return false;
    }
    var comparison = true;
    for (var i = 0; i < matOne.length; i++) {
        for (var j = 0; j < matOne[0].length; j++) {
            comparison = comparison && matOne[i][j] == matTwo[i][j];
        }
    }
    return comparison;
}
function dimensionesIguales(matOne, matTwo) {
    var dimension = dimensionM(matOne) == dimensionM(matTwo) && dimensionN(matOne) == dimensionN(matTwo);
    return dimension;
}
function sumaFila(mat) {
    if (dimensionM(mat) != 0 && dimensionN(mat) != 0) {
        var sumaFinal = [];
        for (var j = 0; j < mat.length; j++) {
            var sumaTemp = 0;
            for (var i = 0; i < mat[j].length; i++) {
                sumaTemp = sumaTemp + mat[j][i];
            }
            sumaFinal[j] = sumaTemp;
        }
        return sumaFinal;
    }
    return [0];
}
function sumaColumna(mat) {
    if (dimensionM(mat) != 0 && dimensionN(mat) != 0) {
        var sumaFinal = [];
        for (var j = 0; j < mat[0].length; j++) {
            var sumaTemp = 0;
            for (var i = 0; i < mat.length; i++) {
                sumaTemp = sumaTemp + mat[i][j];
            }
            sumaFinal[j] = sumaTemp;
        }
        return sumaFinal;
    }
    return [0];
}
function dimensionN(mat) {
    var longitud = mat.length;
    var longitudConsistente = true;
    for (var i = 0; i < mat[0].length; i++) {
        longitudConsistente = mat.length == longitud;
    }
    if (longitudConsistente) {
        return longitud;
    }
    return 0;
}
function dimensionM(mat) {
    var longitud = mat[0].length;
    var longitudConsistente = true;
    for (var i = 0; i < mat.length; i++) {
        longitudConsistente = mat[i].length == longitud;
    }
    if (longitudConsistente) {
        return longitud;
    }
    return 0;
}
function main() {
    var matOne = [[1, 4, 3], [1, 3, 4]];
    var matTwo = [[1, 2, 3], [1, 3, 4]];
    if (equals(matOne, matTwo)) {
        console.log("Los arreglos son iguales");
    }
    console.log("los arreglos no son iguales");
    console.log(sumaColumna(matTwo));
    console.log(sumaFila(matTwo));
}
main();
