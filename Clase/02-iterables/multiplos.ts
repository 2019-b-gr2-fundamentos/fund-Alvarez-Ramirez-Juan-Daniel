let numero = 1; //numero de deberes
let deberesAnalisis = 0;
let deberesAlgebra = 0;
let deberesCompiladores = 0;
let deberesFundamentos = 0;
let deberesCalculo = 0;
let deberesFisica = 0;
let deberesIngles = 0;

while(numero<1001){
    if(numero % 13 == 0) {
        deberesIngles = deberesIngles+1;
    }else if(numero % 11 == 0) {
        deberesFisica = deberesFisica+1;
    }else if(numero % 7 == 0) {
        deberesCalculo = deberesCalculo+1;
    }else if(numero % 5 == 0) {
        deberesFundamentos = deberesFundamentos+1;
    }else if(numero % 3 == 0) {
        deberesCompiladores = deberesCompiladores+1;
    }else if(numero % 2 == 0) {
        deberesAlgebra = deberesAlgebra+1;
    }else{
        deberesAnalisis = deberesAnalisis+1;
    }
    numero = numero+1;
}
numero = numero-1;
console.log(`Para ${numero} deberes, por cada materia se tiene la siguiente cantidad de deberes:`);
console.log("Analisis: "+deberesAnalisis);
console.log("Algebra: "+deberesAlgebra);
console.log("Compiladores: "+deberesCompiladores);
console.log("Fundamentos: "+deberesFundamentos);
console.log("Calculo: "+deberesCalculo);
console.log("Fisica: "+deberesFisica);
console.log("Ingles: "+deberesIngles);