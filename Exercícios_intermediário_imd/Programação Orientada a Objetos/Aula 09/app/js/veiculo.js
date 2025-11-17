"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var direcao_1 = require("./direcao");
var motor_1 = require("./motor");
var Veiculo = /** @class */ (function () {
    function Veiculo(fabricante, _modelo, _cor, _placa, potencia) {
        if (_placa === void 0) { _placa = "Sem placa"; }
        this.fabricante = fabricante;
        this._modelo = _modelo;
        this._cor = _cor;
        this._placa = _placa;
        this._motor = new motor_1.Motor(potencia);
        this._direcao = new direcao_1.Direcao();
    }
    Object.defineProperty(Veiculo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        set: function (placa) {
            this._placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "motor", {
        get: function () {
            return this._motor;
        },
        set: function (motor) {
            this._motor = motor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "direcao", {
        get: function () {
            return this._direcao;
        },
        set: function (direcao) {
            this._direcao = direcao;
        },
        enumerable: false,
        configurable: true
    });
    Veiculo.prototype.exibirInformacoes = function () {
        console.log("\n    INFORMA\u00C7\u00D5ES:\n    Fabricante: ".concat(this.fabricante, ",\n    Modelo: ").concat(this.modelo, ",\n    Cor: ").concat(this.cor, ",\n    Placa: ").concat(this.placa, ",\n    Pot\u00EAncia: ").concat(this._motor.potencia, "\n    "));
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
