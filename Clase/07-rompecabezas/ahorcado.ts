import {prompts} from 'prompts'

const palitos:string[] = [
    "",
    "",
    "",
    "",
]

async function juego(){
    const mensajeTipo =         {
        type:'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    }
    const mensaje = await prompts();
    console.log(mensaje);
}

function main(){
    juego().then().catch();
    
}
main();