"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
var Estudante = /** @class */ (function () {
    function Estudante(id, _nome, _creditos) {
        this.id = id;
        this._nome = _nome;
        this._creditos = _creditos;
        if (_creditos == undefined || _creditos <= 0) {
            this._creditos = 1;
        }
    }
    Object.defineProperty(Estudante.prototype, "numId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudante.prototype, "numCreditos", {
        get: function () {
            return this._creditos;
        },
        set: function (creditos) {
            if (this._creditos <= 0) {
                this._creditos = 1;
            }
            else {
                this._creditos = creditos;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudante.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.exibirInfo = function () {
        console.log("\n            INFORMA\u00C7\u00D5ES\n            ID      : ".concat(this.id, "\n            Nome    : ").concat(this._nome, "\n            Cr\u00E9ditos: ").concat(this._creditos, "\n            "));
    };
    return Estudante;
}());
exports.Estudante = Estudante;
