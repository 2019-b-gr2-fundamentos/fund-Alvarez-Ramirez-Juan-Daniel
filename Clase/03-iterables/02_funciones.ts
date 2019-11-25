
function sumar(numUno:number, numDos:number):number{
    return numUno + numDos;
}

function restar(numUno:number, numDos:number):number{
    return numUno - numDos;
}

function multiplicar(numUno:number, numDos:number):number{
    return numUno * numDos;
}

function dividir(numUno:number, numDos:number):number{
    return numUno / numDos;
}


function calculadora(){
    const operacion:string = prompt('Selecciona una opcion: Suma[1], Resta[2], multiplicacion[3], division[4], cerrar[5]');

    const esSuma:boolean = operacion == "1"||
                        operacion == "Suma"||
                        operacion == "Suma[1]";
    const esResta:boolean = operacion == "2"||
                        operacion == "Resta"||
                        operacion == "Resta[2]";
    const esDivision:boolean = operacion == "3"||
                        operacion == "multiplicacion"||
                        operacion == "multiplicacion[3]";
    const esMultiplicacion:boolean = operacion == "4"||
                        operacion == "division"||
                        operacion == "division[4]";
    
    if (esSuma||esMultiplicacion||esDivision||esResta){
        const numeroUno:number = Number(prompt("ingrese el numero uno"))
        const numeroDos:number = Number(prompt("ingrese el numero dos"))
        
        if(esSuma){
                console.log(sumar(numeroDos,numeroUno));
            }
        if(esResta){
                console.log(restar(numeroUno,numeroDos));
            }
        if(esMultiplicacion){
                console.log(multiplicar(numeroUno,numeroDos));
            }   
        if(esDivision){
                console.log(dividir(numeroUno,numeroDos));
            }      
    }else if(operacion == "5"){
        console.log("adios");
    }
    else{calculadora();} 
    return;
}

function main(){
    calculadora();
    }
    