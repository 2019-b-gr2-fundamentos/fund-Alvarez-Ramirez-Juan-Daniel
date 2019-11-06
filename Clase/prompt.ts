
const inputOpcion = prompt("Quiere sumar[1], restar[2], multiplicar[3], dividir[4] o calcular distancia con MRUV[5]? Ingrese el numero de la operacion que quiere realizar")
const opcion = Number(inputOpcion)

if(opcion != 5){                //operaciones algebraicas
const inputUno = prompt("ingrese el numero uno");
const inputDos = prompt("ingrese el numero dos");
const numeroUno = Number(inputUno);
const numeroDos = Number(inputDos);
if(opcion == 1){                //suma
    let suma = numeroUno + numeroDos;
    console.log("la suma n1+n2 = " +suma);
}else if(opcion == 2){          //resta
    let resta = numeroUno - numeroDos; 
    console.log("la resta n1-n2 = " +resta);
}else if(opcion == 3){          //division
    let division = numeroUno / numeroDos;
    console.log("la division n1/n2 = " +division);
}else if(opcion == 4){          //multiplicacion
    let multiplicacion = numeroUno * numeroDos;
    console.log("la multiplicacion n1*n2 = " +multiplicacion);
}
}else if(opcion == 5){          //quinta operacion, distancia con MRUV
    const velocidadInicialInput = prompt("ingrese la velocidad inicial en metros sobre segundo");
    const velocidadInicial = Number(velocidadInicialInput);
    const aceleracionInput = prompt("ingrese la aceleracion en metros sobre segundo al cuadrado");
    const aceleracion = Number(aceleracionInput);
    const tiempoInput = prompt("ingrese el tiempo en segundos");
    const tiempo = Number(tiempoInput);
    const distancia = velocidadInicial*tiempo+aceleracion*aceleracion*tiempo;
    console.log("la distancia hacia el punto es "+distancia+" metros");
}







