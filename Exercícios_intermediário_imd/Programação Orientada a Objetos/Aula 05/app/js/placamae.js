"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacaMae = void 0;
var PlacaMae = /** @class */ (function () {
    function PlacaMae(_fabricante) {
        this._fabricante = _fabricante;
    } //AMD
    Object.defineProperty(PlacaMae.prototype, "fabricante", {
        get: function () {
            return this._fabricante;
        },
        enumerable: false,
        configurable: true
    });
    return PlacaMae;
}());
exports.PlacaMae = PlacaMae;
