import * as prompts from 'prompts';

function main(){
 obtenerDatosDeAnimalPerritoSincrona();
}


async function obtenerDatosDeAnimalPerritoSincrona(){
    console.log("Inicio");
    const preguntas =[
        {
            type:'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type:'string',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type:'string',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        },
    ];
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta',respuestaEdad);
    console.log('Fin');
}
main();