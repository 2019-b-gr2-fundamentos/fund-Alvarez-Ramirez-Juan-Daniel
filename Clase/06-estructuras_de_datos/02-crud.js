var prompts = require('prompts');
function main() {
    obtenerDatosDeAnimalPerrito();
}
function obtenerDatosDeAnimalPerrito() {
    console.log("Start");
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad?'
    })
        .then(function (datos) {
        console.log('datos', datos);
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'puedes darme tu nombre?'
        })
            .then(function (datos) {
            console.log('datos', datos);
        })
            .catch(function (error) {
            console.log('error', error);
        });
    })
        .catch(function (error) {
        console.log('error', error);
    });
    console.log("End");
}
main();
