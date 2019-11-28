function ProductoCruz(vectorUno:number[],vectorDos:number[]):number[]{
    let crossProduct:number[] = [];
    let result = 0;
    for(let i = 0; i < vectorUno.length-1; i++){
        let tempResultSuma = vectorUno[i]*vectorDos[i+1];
        let tempResultResta = vectorDos[i]*vectorUno[i+1];
        crossProduct.push(tempResultSuma-tempResultResta);
    }
    let tempResultSuma = vectorUno[vectorUno.length-1]*vectorDos[0];
    let tempResultResta = vectorDos[0]*vectorUno[vectorUno.length-1];
    crossProduct.push(tempResultSuma-tempResultResta);
    crossProduct = Rotar(crossProduct);
    return crossProduct;
}
function ProductoCruzAltenativo(vectorUno:number[],vectorDos:number[]):number{
    let suma = 0
    let result = 0;
    for(let i = 0; i < vectorUno.length-1; i++){
        let tempResultSuma = vectorUno[i]*vectorDos[i+1];
        suma = suma + tempResultSuma;
    }
    let tempResultSuma = vectorUno[vectorUno.length-1]*vectorDos[0];
    suma = suma + tempResultSuma;
    return suma;
}
function Rotar(array:number[]):number[]{
    let temp = array[array.length-1];
    for(let i = array.length-1; i=0;i--){
        array[i]= array[i-1];
    }
    array[0] = temp;
    return array;
}
function imprimirArreglo(array):void{
    let stringIndices:string[] = ["i","j","k","l","m","n"];
    let stringArreglo:string = "";
    for (let i:number = 0; i < array.length-1; i++) {
        stringArreglo = stringArreglo + array[i] + stringIndices[i] + " + " 
    }
    stringArreglo = stringArreglo + array[array.length-1] + stringIndices[array.length-1]
    console.log(stringArreglo);
}
function imprimirArregloAlternativo(array:number[]){
    let stringArreglo:string = "[";
    for (let i:number = 0; i < array.length-1; i++) {
        stringArreglo = stringArreglo + array[i] + ", " 
    }
    stringArreglo = stringArreglo + array[array.length-1] + "]"
    console.log(stringArreglo);
}

function main():void{
    const arregloA:number[] = [1,2,3,4];
    const arregloB:number[] = [4,5,6,7];
    const productoArreglos:number[] = ProductoCruz(arregloA,arregloB);
    const productoCruzAlternativoValor = ProductoCruzAltenativo(arregloA,arregloB);
    const productoCruzArreglosAlternativo = [0,0, productoCruzAlternativoValor] 
    imprimirArreglo(productoArreglos);
    imprimirArregloAlternativo(productoCruzArreglosAlternativo);
}

main();