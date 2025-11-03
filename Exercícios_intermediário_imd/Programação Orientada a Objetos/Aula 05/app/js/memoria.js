"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memoria = void 0;
var Memoria = /** @class */ (function () {
    function Memoria(_tamanho) {
        this._tamanho = _tamanho;
    } // 3 ou 4 gb;
    Object.defineProperty(Memoria.prototype, "tamanho", {
        get: function () {
            return this._tamanho;
        },
        enumerable: false,
        configurable: true
    });
    return Memoria;
}());
exports.Memoria = Memoria;
