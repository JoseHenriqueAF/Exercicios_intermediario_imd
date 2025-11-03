"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
var Monitor = /** @class */ (function () {
    function Monitor(_modelo) {
        this._modelo = _modelo;
    } // rtzen ou samsung 
    Object.defineProperty(Monitor.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    return Monitor;
}());
exports.Monitor = Monitor;
