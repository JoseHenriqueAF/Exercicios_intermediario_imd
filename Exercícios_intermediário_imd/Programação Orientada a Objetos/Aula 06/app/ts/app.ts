import { Terrestre } from "./terrestre";
import { Transporte } from "./transporte";

let terrestre = new Terrestre();

terrestre.capacidade = 5;

console.log(terrestre.capacidade);

let transporte = new Transporte;

terrestre.numRodas = 4;

terrestre.exibirInformacoes();