import * as prompts from 'prompts'

async function nodeValesVerga(){
    const letraAdivinadaEntrada = await prompts({
        type: 'text',
        name: 'letra',
        message: 'ingresa una letra'
    });
    console.log(letraAdivinadaEntrada.letra);

}
nodeValesVerga();