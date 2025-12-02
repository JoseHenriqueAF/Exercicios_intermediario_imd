"use strict";
/// reference path = "StringUtils.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
//let mensagem = "oi";
var Texto;
(function (Texto) {
    function imprimir(texto) {
        console.log(texto);
    }
    Texto.imprimir = imprimir;
    function contarTexto(texto) {
        return texto.length;
    }
    Texto.contarTexto = contarTexto;
})(Texto || (Texto = {}));
// console.log(ex.mensagem);
// ex.teste();
//Class
var funcionario_1 = require("./funcionario");
var F = new funcionario_1.default("Jose");
F.imprimirNome();
