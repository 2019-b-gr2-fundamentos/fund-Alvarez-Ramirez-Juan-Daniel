export interface AnimalPerrito {
    nombreCientifico:string;
    nombre:string;
    clan:string;
    edad:number;
    hijos?:number;
    perritas?:Array<string>;
    vacunado?:boolean;
}