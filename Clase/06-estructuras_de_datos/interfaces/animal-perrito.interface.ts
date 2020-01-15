import { Duenio } from "./duenio.interface";
export interface AnimalPerrito {
    nombreCientifico:string;
    nombre:string;
    clan:string;
    edad:number;
    hijos?:number;
    perritas?:Array<string>;
    vacunado?:boolean;
    duenio: Duenio;
}