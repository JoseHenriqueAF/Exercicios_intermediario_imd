import { Transporte } from "./teste/transporte";
import { Terrestre } from "./teste/terrestre";

let  transporte = new Transporte(5);
let terrestre = new Terrestre(4,6);

// terrestre.capacidade = 5;
// terrestre.numRodas = 4;

// terrestre.exibirInformacoes();

// console.log(`Capacidade de Transporte: ${transporte.capacidade}.\nCapacidade de Terrestre ${terrestre.capacidade}.\nNúmero de Rodas: ${terrestre.numRodas}.`);

//transporte.exibirInformacoes();
terrestre.exibirInformacoes();