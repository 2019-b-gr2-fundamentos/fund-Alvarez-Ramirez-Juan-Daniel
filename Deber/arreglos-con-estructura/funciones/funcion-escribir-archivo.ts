import * as fs from 'fs-extra'

export async function escribirArhivo(array, nombreDeNuevoArray){
    let arrayParaAgregar = "";
    array.forEach(
        function(element) {
            arrayParaAgregar = arrayParaAgregar +element+ "\n"  
    });
    await fs.writeFile('./datos/'+nombreDeNuevoArray+'.txt', arrayParaAgregar, function (err) {
        if (err) throw err;
    }); 
    console.log('Guardado Exitosamente');
}