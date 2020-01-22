import * as fs from 'fs'

export function leerArchivo(path:string):string{
    console.log("leer archivo");
    const resultado = fs.readFileSync(
        path,
        'utf-8',
    )
    return resultado;
}