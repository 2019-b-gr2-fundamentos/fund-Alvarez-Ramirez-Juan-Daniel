function arregloIgualAArreglo (matOne:number[][],matTwo:number[][]):boolean{
    if(!dimensionesIgualesDeDosArreglos
    (matOne,matTwo)){
        return false;
    }
    let comparison = true;
    for (let i = 0; i < matOne.length; i++) {
        for (let j = 0; j < matOne[0].length; j++) {
            comparison = comparison && matOne[i][j] == matTwo[i][j];
        }
    }
    return comparison;
} 
function dimensionesIgualesDeDosArreglos(matOne:number[][],matTwo:number[][]):boolean{
    let laDimensionEsEquivalente = dimensionM(matOne) == dimensionM(matTwo) && dimensionN(matOne) == dimensionN(matTwo);
    return laDimensionEsEquivalente;
}
function sumaFila(mat:number[][]):Array<number>{
    if(longitudDeArregloConsistente(mat)){
    let sumaFinal = [];
    for (let j = 0; j < mat.length; j++) {
        let sumaTemp = 0
        for (let i = 0; i < mat[j].length; i++) {
            sumaTemp = sumaTemp + mat[j][i];     
        }
        sumaFinal[j]= sumaTemp
    }
    return sumaFinal;
    }
    return;
}
function sumaColumna(mat:number[][]):Array<number>{
    if(longitudDeArregloConsistente(mat)){
    let sumaFinal = [];
    for (let j = 0; j < mat[0].length; j++) {
        let sumaTemp = 0
        for (let i = 0; i < mat.length; i++) {
            sumaTemp = sumaTemp + mat[i][j];     
        }
        sumaFinal[j]= sumaTemp
    }
    return sumaFinal;
    }
    return;
}
function dimensionN (mat:number[][]):number{
    if(longitudDeArregloConsistente(mat)){
        return mat.length;
    }
    return 0;
} 
function dimensionM (mat:number[][]):number{
    if(longitudDeArregloConsistente(mat)){
        return mat[0].length;
    }
    return 0;
} 
function longitudDeArregloConsistente (mat:number[][]):boolean{
    for(let j=0; j<mat.length; j++){
         if(mat[0].length != mat[j].length){
            console.log("longitud inconsistente en la matriz: ",mat)
             return false;
         }
    }
    return true
}
function esArregloCuadrado (mat:number[][]):boolean{
   if(longitudDeArregloConsistente(mat)){
       if(mat.length == mat[0].length){
           return true;
       }
   }
   return false;
}
function intercalar(mat:number[][]):number[][]{
    if(esArregloCuadrado(mat)){
    let tempArray:number[][] = [];
    for (let j = 0; j < mat.length; j++) {
        tempArray.push([]);
        for (let i = 0; i < mat[j].length; i++) {
            if(tempArray[j][i]==null){
            tempArray[j][i] = mat[j][i]

            if(i==j || j == mat[j].length-i-1) {
                tempArray[j][i] = mat[j][mat[j].length-i-1];
                tempArray[j][mat[j].length-i-1] = mat[j][i];
                
            }
            }
            
        }
    }
    return tempArray;
    }
    return;
}

function main(){
    let matOne = [[1,4],[1,3,4],[1,2,3]];
    let matTwo = [[1,2,3],[1,3,4]];
    if(arregloIgualAArreglo
    (matOne,matTwo)){
        console.log("Los arreglos son iguales")
    }
    console.log("los arreglos no son iguales")
    console.log("la suma de columnas es: "+ sumaColumna(matTwo));
    console.log("la suma de filas es: " + sumaFila(matTwo));
    console.log(intercalar(matOne));
}
main()