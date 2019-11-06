console.log("ingrese un mes del año en minusculas");
const input = prompt() ;

switch(input){
    case "verano":
        console.log("Este mes en promedio dura 93,7 dias");
        break;
    case "otoño":
        console.log("Este mes en promedio dura 89,6 dias");
        break;
    case "invierno":
        console.log("Este mes en promedio dura 89,0 dias");
        break;
    case "primavera":
       console.log("Este mes en promedio dura 92,9 dias");
        break;  
    default:
        break;
}
