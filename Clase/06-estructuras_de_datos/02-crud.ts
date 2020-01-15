import * as prompts from 'prompts';

function main(){
 obtenerDatosDeAnimalPerrito();
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
);


console.log("End");

}
main();