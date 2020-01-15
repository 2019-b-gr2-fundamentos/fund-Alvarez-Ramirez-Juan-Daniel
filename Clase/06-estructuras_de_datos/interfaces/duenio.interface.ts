import {AnimalPerrito} from './animal-perrito.interface'
export interface Duenio {
    nombre:string;
    apellidos:string;
    cedula?:string;
    fechaNacimiento:number;
    peritos: [AnimalPerrito];
}