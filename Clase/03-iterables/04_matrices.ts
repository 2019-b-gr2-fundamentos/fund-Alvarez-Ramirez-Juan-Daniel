function arregloIgualAArreglo (matOne:Array<Array<number>>,matTwo:Array<Array<number>>):boolean{
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
function dimensionesIgualesDeDosArreglos(matOne:Array<Array<number>>,matTwo:Array<Array<number>>):boolean{
    let dimension = dimensionM(matOne) == dimensionM(matTwo) && dimensionN(matOne) == dimensionN(matTwo);
    return dimension
}
function sumaFila(mat:Array<Array<number>>):Array<number>{
    if(dimensionM(mat) != 0 && dimensionN(mat) != 0){
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
    return [0];
}
function sumaColumna(mat:Array<Array<number>>):Array<number>{
    if(dimensionM(mat) != 0 && dimensionN(mat) != 0){
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
    return [0];
}
function dimensionN (mat:Array<Array<number>>):number{
    if(longitudDeArregloConsistente(mat)){
        return mat.length;
    }
    return 0;
} 
function dimensionM (mat:Array<Array<number>>):number{
    if(longitudDeArregloConsistente(mat)){
        return mat[0].length;
    }
    return 0;
} 
function longitudDeArregloConsistente (mat:number[][]):boolean{
    for(let j=0; j<mat.length; j++){
         if(mat[0].length == mat[j].length){
             return false
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
            console.log(tempArray);
            }
            
        }
    }
    return tempArray;
    }
    return [[0]];
}

function main(){
    let matOne = [[1,4,3],[1,3,4],[1,2,3]];
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