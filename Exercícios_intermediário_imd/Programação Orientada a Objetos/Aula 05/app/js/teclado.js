"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teclado = void 0;
var Teclado = /** @class */ (function () {
    function Teclado(_tipo) {
        this._tipo = _tipo;
    } //mecanico ou normal
    Object.defineProperty(Teclado.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        enumerable: false,
        configurable: true
    });
    return Teclado;
}());
exports.Teclado = Teclado;
