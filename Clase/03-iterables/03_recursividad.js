var n = 0;
function imprimirNVeces(array) {
    if (n == array.length) {
        n = 0;
        return;
    }
    console.log(array[n]);
    n++;
    imprimirNVeces();
    return;
}
function main() {
    //    let size = +prompt("ingrese el tamaño del arreglo");
    //    nuevoArreglo(size);
    var randArray = ["1", "2", "3"];
    imprimirNVeces(randArray);
}
