import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number;
let descuento: number = 9/10;

if(
    esEstudiante === "si"
){
    totalPorPersona = Number(totalTexto) / Number(personasTexto) * descuento;
} else {
    totalPorPersona = Number(totalTexto) / Number(personasTexto);
}

console.log(`Total por persona: $${totalPorPersona}`);

