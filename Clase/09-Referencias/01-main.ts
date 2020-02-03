function main(){
    let uno = 1;
    let dos = uno;
    let tres = dos;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    const arreglo = [1,2,3];
    let otroArreglo = [];
    let a = arreglo[0];
    let b = arreglo[1];
    console.log('arreglo',arreglo);
    console.log('a',a);
    console.log('b',b);
    otroArreglo = arreglo;
    arreglo[0] = 9;
    arreglo[1] = 10;
    otroArreglo.push(2);
    console.log('arreglo',arreglo);
    console.log('otroArreglo',otroArreglo);
    
    

}
main();