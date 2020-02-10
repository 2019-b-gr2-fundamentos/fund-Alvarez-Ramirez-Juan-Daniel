import { filter } from "./02-filter";
import { every } from "./03-every";
import { some } from "./04-some";
import { forEach } from "./04-forEach";
import { map } from "./05-map";
import { reduce } from "./06-reduce";

function main()
{
    const arregloEstudiantes = 
    [
        {id:1, nombre:"Daniel", nota:7},
        {id:2, nombre:"Vicente", nota:6},
        {id:3, nombre:"Wendy", nota:4},
        {id:4, nombre:"Carolina", nota:9},
        {id:5, nombre:"Carlos", nota:10}
    ];

    //OPERADOR FOREACH
    /*
    Enviamos -> NADA
    Recibimos -> NADA
    */
   arregloEstudiantes.forEach(
       function(valorActual, indice, arreglo){
        //valorActual.nota = valorActual.nota * 2;
       }
   );

   //OPERADOR MAP -> TRANSFORMAR EL ARREGLO
   /*
   Enviamos  -> Valor Actual Modificado
   Recibimos -> Nuevo Arreglo Con Valor Modificados
   */
  const respuestaDelMap = arregloEstudiantes.map(
      function(valorActual, i, arreglo){
          const nuevoObjeto ={
              id:valorActual.id,
              nombre:valorActual.nombre,
              //nota:valorActual.nota,
              nota20:valorActual.nota * 2
          }
          return nuevoObjeto;
      }
  );
  
   //OPERADOR FILTER -> filtra el arreglo 
   /*
   Enviamos  -> Condicion
   Recibimos -> Nuevo Arreglo con los Valores filtrados
   */
  const respuestaFilter = arregloEstudiantes.filter(
      function(valorActual, i, arreglo){
          const condicion7 = valorActual.nota > 7;
          const condicion5 = valorActual.nota < 5;
          return condicion7 || condicion5;
      }
  )

  const respuestaFilterNombre = arregloEstudiantes.filter(
      function(valorActual){
        const condicion4 =! valorActual.nombre.search("Daniel")
        return condicion4;
      }
  )

    //OPERADOR SOME -> si agluno cumple TRUE, si ninguno cumple FALSE
   /*
   Enviamos  -> Condicion
   Recibimos -> Booleano
   */
  const respuestaSome = arregloEstudiantes.some(
      function(valorActual, i, arreglo){
          const condicion = valorActual.nota < 7;
          return condicion;
      }
  );
    //OPERADOR EVERY -> si todos cumplen TRUE, si alguno no cumple FALSE
   /*
   Enviamos  -> Condicion
   Recibimos -> Booleano
   */
  const respuestaEvery = arregloEstudiantes.every(
      function(valorActual, i, arreglo){
          const condicion = valorActual.nota >= 4;
          return condicion;
      }
  );
  //OPERADOR REDUCE -> Aplica el calculo a cada iteracion y devuleve un valor (principio a fin)
  //OPERADOR REDUCEREIGHT -> DEL FIN AL PRINCIPIO
   /*
   Enviamos  -> Calculo
   Recibimos -> Valor
   */
  const respuestaReduce = arregloEstudiantes.reduce(
      function(acumulador, valorActual, i, arreglo){
        const calculo = acumulador + valorActual.nota;
        return calculo;
      },
      0 // VALOR INICIAL DEL ACUMULADOR
  )
  //console.log("respuestaDelForEach", respuestaDelForEach);
  //console.log("respuestaDelMap", respuestaDelMap)
  //console.log("respuestaFilter", respuestaFilter);
  //console.log("respuestaSome", respuestaSome);
  //console.log("respeustaFilterNombre", respuestaFilterNombre);
  //console.log("respuestaEvery:", respuestaEvery);
  console.log("respuestaReduce", respuestaReduce);
  

const respuestaFilterNuestro = filter(arregloEstudiantes, function(valorActual){
    return valorActual.nota == 7; 
});
const respuestaEveryNuestro = every(arregloEstudiantes, function(valorActual){
    return valorActual.nota > 3;
})
const respuestaSomeNuestro = some(arregloEstudiantes, function(valorActual){
    return valorActual.nota == 0;
})
forEach(arregloEstudiantes, function(valorActual){  
    //valorActual.nota = valorActual.nota*10;
})
const respuestaDelMapNuestro = map(arregloEstudiantes, 
    function(valorActual, i, arreglo){
        const nuevoObjeto ={
            id:valorActual.id,
            nombre:valorActual.nombre,
            //nota:valorActual.nota,
            nota20:valorActual.nota * 3
        }
        return nuevoObjeto;
    }
);
const respuestaDelReduceNuestro =reduce(arregloEstudiantes, 
    function(acumulador, valorActual, i, arreglo){
        const calculo = acumulador + valorActual.nota;
        return calculo;
    },0)

//console.log("respuestaFilterNuestro:",respuestaFilterNuestro);
//console.log("respuestaEveryNuestro:", respuestaEveryNuestro);
//console.log("respuestaSomeNuestro:", respuestaSomeNuestro);
//console.log("respuestaDelForEachNuestro\n", arregloEstudiantes)
//console.log("respuestaDelMapNUestro", respuestaDelMapNuestro);
console.log("arregloEstudiantes\n", arregloEstudiantes);
//console.log("respuestaDelReduceNuestro\n", respuestaDelReduceNuestro);
}
main();