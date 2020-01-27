export function imprimir(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]== null){
        }else{
            console.log(`dato: ${array[i]}, posicion: ${i}`)
        }
    };
}