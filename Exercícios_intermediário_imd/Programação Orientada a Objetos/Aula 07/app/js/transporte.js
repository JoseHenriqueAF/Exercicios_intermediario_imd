"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporte = void 0;
var Transporte = /** @class */ (function () {
    function Transporte(capacidade) {
        this._capacidade = capacidade;
    }
    Object.defineProperty(Transporte.prototype, "capacidade", {
        get: function () {
            return this._capacidade;
        },
        set: function (capacidade) {
            this._capacidade = capacidade;
        },
        enumerable: false,
        configurable: true
    });
    Transporte.prototype.exibirInformacoes = function () {
        console.log("Capacidade: ".concat(this._capacidade, "."));
    };
    return Transporte;
}());
exports.Transporte = Transporte;
