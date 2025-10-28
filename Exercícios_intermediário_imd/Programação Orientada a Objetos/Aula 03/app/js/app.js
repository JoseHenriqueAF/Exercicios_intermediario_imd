"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var c;
c = new carro_1.Carro("Fiesta", "Azul");
c.cor = "Vermelho";
var c2 = new carro_1.Carro("Uno", "Vermelho");
console.log("A cor do carro c ".concat(c.modelo, " \u00E9 ").concat(c.cor, ". Numeros de portas \u00E9 ").concat(c.mostrarPortas, ". A placa \u00E9 ").concat(c.numPlaca, "\nA cor do carro c2 ").concat(c2.modelo, " \u00E9 ").concat(c2.cor, ".Numeros de portas \u00E9 ").concat(c2.mostrarPortas, ". A placa \u00E9 ").concat(c2.numPlaca));
