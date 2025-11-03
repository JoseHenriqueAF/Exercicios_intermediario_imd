"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = require("./veiculo");
var veiculo = new veiculo_1.Veiculo(10);
veiculo.motor.potencia = 1000;
console.log(veiculo.motor.potencia);
