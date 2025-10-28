"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, placa, numPortas) {
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.numPortas = numPortas;
    }
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "numPlaca", {
        get: function () {
            return this.placa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "mostrarPortas", {
        get: function () {
            return this.numPortas;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
exports.Carro = Carro;
