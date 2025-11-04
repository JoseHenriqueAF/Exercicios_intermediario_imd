"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporte = void 0;
var Transporte = /** @class */ (function () {
    function Transporte() {
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
    return Transporte;
}());
exports.Transporte = Transporte;
