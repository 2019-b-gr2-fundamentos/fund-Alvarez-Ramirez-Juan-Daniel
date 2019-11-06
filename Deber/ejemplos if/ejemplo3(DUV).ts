
console.log("Ingrese el nivel de alcohol en la sangre en gramos por litro ej:0.3");
const input = Number(prompt()) ;
if(input => 5){
    console.log("riezgo de coma etilico");
}else if(input => 1.2){
    console.log("multa de tres salarios, la suspensión de la licencia por 60 días y 30 días de cárcel.");
} else if(input => 0.8){
    console.log("multa de dos salarios, pérdida de 10 puntos en la licencia y 15 días detención.");

}else if(input => 0.3){
    console.log("multa de un salario básico unificado, pérdida de cinco puntos en su licencia y cinco días de cárcel.");
}else{
    console.log("numero invalido");
}
