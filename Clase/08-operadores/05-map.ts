export function map(
    arreglo: any[],
    funcion: (valorActual:any, indice?:number, arreglo?:any[]) => any
):any[]{
    const arregloModificado = [];
    const arregloCopia = [...arreglo]
    for(let i = 0; i < arreglo.length; i ++){
        const respuestaFuncion = funcion(arregloCopia[i], i, arregloCopia)
        arregloModificado.push(respuestaFuncion);
    }
    return arregloModificado;
}