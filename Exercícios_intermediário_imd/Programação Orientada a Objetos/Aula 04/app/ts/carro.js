"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(fabricante, _modelo, _cor, _placa, _numPortas) {
        this.fabricante = fabricante;
        this._modelo = _modelo;
        this._cor = _cor;
        this._placa = _placa;
        this._numPortas = _numPortas;
        if (_numPortas == undefined || _numPortas < 2) {
            this._numPortas = 2;
        }
    }
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
        console.log("\n        INFORMA\u00C7\u00D5ES:\n        Fabricante: ".concat(this.fabricante, ",\n        Modelo: ").concat(this._modelo, ",\n        Cor: ").concat(this._cor, ",\n        Placa: ").concat(this._placa, ",\n        Portas: ").concat(this._numPortas, "\n        "));
    };
    return Carro;
}());
exports.Carro = Carro;
