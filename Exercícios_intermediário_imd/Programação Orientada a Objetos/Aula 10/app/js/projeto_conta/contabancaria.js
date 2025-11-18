"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var saldoinsuficienteerror_1 = require("./errors/saldoinsuficienteerror");
var valorinvalidoerror_1 = require("./errors/valorinvalidoerror");
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
        this._saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor <= 0) {
            throw new valorinvalidoerror_1.ValorInvalidoError('Valor inválido para depósito', valor);
        }
        this._saldo += valor;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= 0) {
            throw new valorinvalidoerror_1.ValorInvalidoError('Valor inválido para saque', valor);
        }
        if (this._saldo - valor < 0) {
            throw new saldoinsuficienteerror_1.SaldoInsuficienteError("Não suficiente", this._saldo);
        }
        this._saldo -= valor;
    };
    ContaBancaria.prototype.transferir = function (valor, contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Object.defineProperty(ContaBancaria.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
