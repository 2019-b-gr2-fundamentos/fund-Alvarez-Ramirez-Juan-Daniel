
console.log("Con que ideologia politica se identifica? considere las opciones izquierda[1],centro izquierda[2],cnetro derecha[3],derecha[4],ultra derecha[5]");
const input = prompt() ;

switch(input){
    case 1:
        console.log("usted probablemente esta entre clase clase media o baja");
        break;
    case 2:
        console.log("usted probablemente esta entre clase media o media baja");
        break;
    case 3:
        console.log("usted probablemente esta entre clase media o media alta");
       break;
    case 4:
        console.log("usted probablemente esta entre clase media o alta");
        break;
    case 5:
        console.log("usted probablemente esta entre clase media o alta");
        break;
    default:
        console.log("input no identificado, asegurese de ingresar un numero");
        break;
}