"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
var teclado_1 = require("./teclado");
var monitor_1 = require("./monitor");
var placamae_1 = require("./placamae");
var Computador = /** @class */ (function () {
    function Computador(teclado, monitor, placaMae) {
        this._teclado = new teclado_1.Teclado(teclado);
        this._monitor = new monitor_1.Monitor(monitor);
        this._placaMae = new placamae_1.PlacaMae(placaMae);
    }
    Object.defineProperty(Computador.prototype, "teclado", {
        get: function () {
            return this._teclado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "monitor", {
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "placaMae", {
        get: function () {
            return this._placaMae;
        },
        enumerable: false,
        configurable: true
    });
    return Computador;
}());
exports.Computador = Computador;
