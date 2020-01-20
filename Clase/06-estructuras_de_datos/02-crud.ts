import * as prompts from 'prompts';

function main(){
 obtenerDatosDeAnimalPerrito();
 obtenerDatosDeAnimalPerritoSincrona();
}

function obtenerDatosDeAnimalPerrito(){
console.log("Start");

const promesaEdad = prompts({
    type:'number', 
    name: 'edad',
    message: 'puedes darme tu edad?'
})
.then(
    (datos) => {
        console.log('datos',datos);
        
        const promesaNombre = prompts({
            type:'text', 
            name: 'nombre',
            message: 'puedes darme tu nombre?'
        })
        .then(
            (datos) => {
                console.log('datos',datos);
            
            }
        )
        .catch(
            (error) => {
                console.log('error',error);
            }
        );
    }
)
.catch(
    (error) => {
        console.log('error',error);
    }
);}
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
    ]
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta',respuestaEdad)
    console.log('Fin');
}