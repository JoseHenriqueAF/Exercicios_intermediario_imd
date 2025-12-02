"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcinario = /** @class */ (function () {
    function Funcinario(nome) {
        this.nome = nome;
    }
    Funcinario.prototype.imprimirNome = function () {
        console.log(this.nome);
    };
    return Funcinario;
}());
exports.default = Funcinario;
var empresa = "Minha Empresa!";
