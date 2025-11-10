"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var direcao_1 = require("./direcao");
var motor_1 = require("./motor");
var Veiculo = /** @class */ (function () {
    function Veiculo(potencia) {
        this._motor = new motor_1.Motor(potencia);
        this._direcao = new direcao_1.Direcao();
    }
    Veiculo.prototype.ligar = function () {
        console.log("Veiculo ligado ...");
    };
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
    return Veiculo;
}());
exports.Veiculo = Veiculo;
