import { Computador } from "./computador";

let pc = new Computador("mecânico","samsung","amd");

console.log(`Tipo de teclado: ${pc.teclado.tipo}.\nModelo de Monitor: ${pc.monitor.modelo}.\nFabricante da Placa mãe: ${pc.placaMae.fabricante}`);