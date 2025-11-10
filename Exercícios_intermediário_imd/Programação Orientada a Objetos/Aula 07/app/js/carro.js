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
exports.Carro = void 0;
var veiculo_1 = require("./veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(fabricante, _modelo, _cor, potencia, _placa, _numPortas) {
        var _this = _super.call(this, potencia) || this;
        _this.fabricante = fabricante;
        _this._modelo = _modelo;
        _this._cor = _cor;
        _this._placa = _placa;
        _this._numPortas = _numPortas;
        if (_numPortas == undefined || _numPortas < 2) {
            _this._numPortas = 2;
        }
        return _this;
    }
    Carro.prototype.ligar = function () {
        console.log("Carro ligado ...");
    };
    Object.defineProperty(Carro.prototype, "numPortas", {
        get: function () {
            return this._numPortas;
        },
        set: function (numPortas) {
            if (numPortas < 2) {
                this._numPortas = 2;
            }
            else {
                this._numPortas = numPortas;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        set: function (placa) {
            this._placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.exibirInformacoes = function () {
        console.log("\n        INFORMA\u00C7\u00D5ES:\n        Fabricante: ".concat(this.fabricante, ",\n        Modelo: ").concat(this._modelo, ",\n        Cor: ").concat(this._cor, ",\n        Placa: ").concat(this._placa, ",\n        Portas: ").concat(this._numPortas, ",\n        Pot\u00EAncia: ").concat(this._motor.potencia, "\n        "));
    };
    return Carro;
}(veiculo_1.Veiculo));
exports.Carro = Carro;
