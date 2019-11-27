let n:number = 0
function imprimirNVeces(array:string[]):void{
    if(n==array.length){
        n=0;
        return;
    }
    console.log(array[n]);
    n++;
    imprimirNVeces();
    return;
}
function main(){
//    let size = +prompt("ingrese el tamaño del arreglo");
//    nuevoArreglo(size);
    let randArray = ["1","2","3"];
    imprimirNVeces(randArray);
}


