"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computador_1 = require("./computador");
var pc = new computador_1.Computador("mecânico", "samsung", "amd");
console.log("Tipo de teclado: ".concat(pc.teclado.tipo, ".\nModelo de Monitor: ").concat(pc.monitor.modelo, ".\nFabricante da Placa m\u00E3e: ").concat(pc.placaMae.fabricante));
