//for
// 1) Declarar una variable OK 
// 2) Condicion ( Expresion )
// 3) Incrementar, Disminuir

// for(let numeroExDeMiCrush = 7; 
//     numeroExDeMiCrush > 0; 
//     numeroExDeMiCrush--){
//     console.log('ES CAN DA LO ' + numeroExDeMiCrush);
// }

// for(let numeroExDeMiCrush = 7; 
//     numeroExDeMiCrush >= 1; 
//     numeroExDeMiCrush--){
//     console.log('ES CAN DA LO ' + numeroExDeMiCrush);
// }

// for(let numeroExDeMiCrush = 1; 
//     numeroExDeMiCrush < 8; 
//     numeroExDeMiCrush++){
//     console.log('ES CAN DA LO ' + numeroExDeMiCrush);
// }

for(let numeroExDeMiCrush = 1; 
    numeroExDeMiCrush <= 7; 
    numeroExDeMiCrush++){
    console.log('ES CAN DA LO ' + numeroExDeMiCrush);
}

//ARREGLOS 
//1 Elemento ( Variable  cosnst numero = 1)
// Conjunto de elementos ( [1, 2, 3, 4, 5] )
// Conjunto de DIFERENTES ELEMENTOS ( [1, "abc", true] )

const arregloNumeros = [1, 2, 3, 4, 5];

//arregloNumeros= [1,2,3,4,5,6]

arregloNumeros.push(6);
console.log('arregloNumeros ',arregloNumeros);

// Arreglo
// 1) Elementos
// 2) Indices (0 index based) -> POSICION
// 3) Longitud -> #ELEMENTOS 
console.log(arregloNumeros.length);

//FOR 
// 1) let tamaño = arreglo 
// 2) tamaño > 0
// 3) --

for(let indiceArreglo = 0 ; indiceArreglo < arregloNumeros.length; indiceArreglo++ ){
    console.log(arregloNumeros[indiceArreglo]);
}

