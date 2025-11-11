"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var moto_1 = require("./moto");
// let brinquedo = new Brinquedo(100);
// let aviao = new Aviao(900);
// let barco = new Barco(300);
// function movimentarBrinquedo(b: Brinquedo){
//     b.mover();
// }
// movimentarBrinquedo(brinquedo);
// movimentarBrinquedo(aviao);
// movimentarBrinquedo(barco);
// let m = new Motor(1000);
// let vend = new Vendedor('Joy');
// let forn = new Fornecedor('Toy');
// let b1 = new Brinquedo(100,1);
// let b2 = new Brinquedo(100,"texto");
// let b3 = new Brinquedo(100,vend);
// let b4 = new Brinquedo(100,forn);
var carro1 = new carro_1.Carro("FORD", "KA", "Vermelho", 1000, "ASD-0909", 4);
var carro2 = new carro_1.Carro("FIAT", "MOBI", "Branco", 1000, "QWE-9878");
var moto1 = new moto_1.Moto("Honda", "CB 650R", "Preta", "YUI-7676", 650);
var moto2 = new moto_1.Moto("Yamaha", "XMAX 250", "Azul", "TRE-6655", 250);
// carro1.exibirInformacoes();
// carro2.exibirInformacoes();
// moto1.exibirInformacoes();
// moto2.exibirInformacoes();
var listaVeiculos = [carro1, carro2, moto1, moto2];
// for (let i = 0; i < listaVeiculos.length; i++) {
//     let veic:Veiculo = listaVeiculos[i];
//     if(veic instanceof Carro){
//         console.log(`Modelo do carro: ${veic.modelo}`);    
//     }else if(veic instanceof Moto){
//         console.log(`Modelo do Moto: ${veic.modelo}`);    
//     }
// }
listaVeiculos
    .filter(function (v) { return v instanceof carro_1.Carro; })
    .forEach(function (v) { return console.log("Carro: ".concat(v.modelo)); });
var Teste = /** @class */ (function (_super) {
    __extends(Teste, _super);
    function Teste() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teste;
}(Error));
