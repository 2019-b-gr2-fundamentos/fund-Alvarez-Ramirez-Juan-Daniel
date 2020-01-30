import * as fs from './node_modules/fs-extra'

export function leerArchivo(path:string):string{
    console.log("leer archivo");
    const resultado = fs.readFileSync(
        path,
        'utf-8',
    )
    return resultado;
}