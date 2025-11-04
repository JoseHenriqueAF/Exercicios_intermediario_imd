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
exports.Terrestre = void 0;
var transporte_1 = require("./transporte");
var Terrestre = /** @class */ (function (_super) {
    __extends(Terrestre, _super);
    function Terrestre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Terrestre.prototype, "numRodas", {
        get: function () {
            return this._numRodas;
        },
        set: function (numRodas) {
            this._numRodas = numRodas;
        },
        enumerable: false,
        configurable: true
    });
    Terrestre.prototype.exibirInformacoes = function () {
        console.log("Capacidade: ".concat(this.capacidade, ".\nRodas ").concat(this._numRodas));
    };
    return Terrestre;
}(transporte_1.Transporte));
exports.Terrestre = Terrestre;
