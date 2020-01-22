import {prompts} from 'prompts'

const palitos:string[] = [
    "",
    "",
    "",
    "",
]
async function juego(){
    const mensaje = await prompts().then().catch();
    console.log(mensaje);
}
function main(){
    juego().then().catch();
    
}
main();