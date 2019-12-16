function arregloIgualAArreglo(matOne, matTwo) {
    if (!dimensionesIgualesDeDosArreglos(matOne, matTwo)) {
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
function dimensionesIgualesDeDosArreglos(matOne, matTwo) {
    var laDimensionEsEquivalente = dimensionM(matOne) == dimensionM(matTwo) && dimensionN(matOne) == dimensionN(matTwo);
    return laDimensionEsEquivalente;
}
function sumaFila(mat) {
    if (longitudDeArregloConsistente(mat)) {
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
}
function sumaColumna(mat) {
    if (longitudDeArregloConsistente(mat)) {
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
    if (longitudDeArregloConsistente(mat)) {
        return mat.length;
    }
    return 0;
}
function dimensionM(mat) {
    if (longitudDeArregloConsistente(mat)) {
        return mat[0].length;
    }
    return 0;
}
function longitudDeArregloConsistente(mat) {
    for (var j = 0; j < mat.length; j++) {
        if (mat[0].length != mat[j].length) {
            return false;
        }
    }
    return true;
}
function esArregloCuadrado(mat) {
    if (longitudDeArregloConsistente(mat)) {
        if (mat.length != mat[0].length) {
            return false;
        }
    }
    return true;
}
function intercalar(mat) {
    if (esArregloCuadrado(mat)) {
        var tempArray = [];
        for (var j = 0; j < mat.length; j++) {
            tempArray.push([]);
            for (var i = 0; i < mat[j].length; i++) {
                if (tempArray[j][i] == null) {
                    tempArray[j][i] = mat[j][i];
                    if (i == j || j == mat[j].length - i - 1) {
                        tempArray[j][i] = mat[j][mat[j].length - i - 1];
                        tempArray[j][mat[j].length - i - 1] = mat[j][i];
                    }
                }
            }
        }
        return tempArray;
    }
    return [[0]];
}
function main() {
    var matOne = [[1, 4, 3], [1, 3, 4], [1, 2, 3]];
    var matTwo = [[1, 2, 3], [1, 3, 4]];
    if (arregloIgualAArreglo(matOne, matTwo)) {
        console.log("Los arreglos son iguales");
    }
    console.log("los arreglos no son iguales");
    console.log("la suma de columnas es: " + sumaColumna(matTwo));
    console.log("la suma de filas es: " + sumaFila(matTwo));
    console.log(intercalar(matOne));
}
main();
