function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglo = [1, 2, 3];
    var otroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log('arreglo', arreglo);
    console.log('a', a);
    console.log('b', b);
    otroArreglo = arreglo;
    arreglo[0] = 9;
    arreglo[1] = 10;
    otroArreglo.push(2);
    console.log('arreglo', arreglo);
    console.log('otroArreglo', otroArreglo);
}
main();
