
const inputUno = prompt("ingrese el numero uno");
const inputDos = prompt("ingrese el numero dos");
const inputOpcion = prompt("Quiere sumar, restar, multiplicar o dividir?")
const numeroUno = Number(inputUno);
const numeroDos = Number(inputDos);
let suma = numeroUno + numeroDos;
let resta = numeroUno - numeroDos;
let division = numeroUno / numeroDos;
let multiplicacion = numeroUno * numeroDos;
console.log("la suma n1+n2 = " +suma);
console.log("la resta n1-n2 = " +resta);
console.log("la division n1/n2 = " +division);
console.log("la multiplicacion n1*n2 = " +multiplicacion);
