import * as fs from 'fs'

export function escribirArchivo(path:string, contenido: string){
    console.log("leer archivo");
    const resultado = fs.readFileSync(
        path,
        contenido,
        'utf-8',
    );
}