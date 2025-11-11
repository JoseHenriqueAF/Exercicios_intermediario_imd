"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor(potencia) {
        this._potencia = potencia;
    }
    Object.defineProperty(Motor.prototype, "potencia", {
        get: function () {
            return this._potencia;
        },
        set: function (potencia) {
            this._potencia = potencia;
        },
        enumerable: false,
        configurable: true
    });
    return Motor;
}());
exports.Motor = Motor;
