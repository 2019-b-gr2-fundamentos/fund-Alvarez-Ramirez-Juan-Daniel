import * as fs from 'fs-extra';
import * as prompts from 'prompts';
import {menu} from './funciones/funcion-menu'



async function main(){
    let imagenAhorcado = fs.readFileSync('./ahorcado_imagenes/6.txt','utf8');
    console.log(imagenAhorcado); 
    console.log("Bienvenido al juego");
    await prompts ({
        type: 'text',
        name: 'txtxt',
        message: 'Aplaste una tecla para empezar'
    })

    menu();
}
main();







