export function some(arreglo:any[], 
    funcion:(valorActual:any, indice?:number, arreglo?:any[])=>boolean
    ):boolean{
        const flag = false;
        for(let i = 0;i < arreglo.length; i ++){
            const respuestaFuncion = funcion(arreglo[i], i, arreglo)
            if(respuestaFuncion == true){
                return true;
            }
        }
        return flag
}