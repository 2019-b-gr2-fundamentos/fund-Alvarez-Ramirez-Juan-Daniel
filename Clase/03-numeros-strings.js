// let numeroUno = 1; //camelCase
// NUMEROUNO    -> TODO MAYUSCULA SIN SEPARACION
// NUMERO_UNO   -> Mayusculas, guion bajo
// NumeroUno    -> primeras mayusculas
// numerouno    -> todas minusculas
// numero_uno   -> minusculas separacion con guion
// numerOunO    -> ultima letra mayuscula
//suma
// let sumaUno = 1+2;
// let sumaDos = Math.SQRT2;
// console.log(sumaDos);
// const mensaje = "hola mundo";
// const saludo = "adios mundo";
// const edad = 30;
// const saludoEdad = `Mi edad es: \n${edad}`;
// console.log(saludoEdad);
// console.log("\"" + mensaje + "222\r\r\r" + saludo + "\"");
var nombreLongitud = "Daniel Alvarez";
console.log(nombreLongitud.replace("X", "o"));
console.log(nombreLongitud.search("z"));
console.log(nombreLongitud.slice(0, nombreLongitud.search(" ")));
console.log(nombreLongitud.indexOf(" "));
console.log(nombreLongitud.includes("z"));
console.log(nombreLongitud.endsWith("z"));
console.log(nombreLongitud.startsWith("z"));
console.log(nombreLongitud.substring(0, 6));
