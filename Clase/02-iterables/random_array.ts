//crear un array de 5 posiciones conformada por 0's y 1's en la que al menos uno de los elementos sea un uno

const numberArray = [];
const arrayLength =  4;
let testUno = false;

do{
for(let index = 0; index <= arrayLength ; index++){
    numberArray.push(Math.floor(Math.random() * 2));
}
for(let index = 0; index <= arrayLength ; index++){
    let existeUNo = numberArray[index] == 1
    testUno = existeUNo || testUno
}
}while(testUno != true);

//testUno es verdad en el momento en que exista un uno
//mientras testUno sea falso el programa va a crear otra array

const guess = Number(prompt("Ingrese su suposicion"));
let resultado = numberArray[guess-1]==1

//si el numero que ingresa el usuario contiene un uno, se considera ganador, caso contrario es un perdedor

if(resultado == true){
    console.log("le atinaste");
}else console.log("perdiste");
console.log("numberArrray ", numberArray);
