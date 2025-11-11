"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brinquedo = void 0;
var fornecedor_1 = require("./fornecedor");
var vendedor_1 = require("./vendedor");
var Brinquedo = /** @class */ (function () {
    function Brinquedo(_velocidade, _args) {
        this._velocidade = _velocidade;
        if (typeof _args == 'number') {
            console.log("".concat(typeof _args, ": n\u00FAmero passado comp par\u00E2metro"));
        }
        else if (typeof _args == 'string') {
            console.log("".concat(typeof _args, ": texto passado comp par\u00E2metro"));
        }
        else if (_args instanceof vendedor_1.Vendedor) {
            console.log('Lógica para vendedor');
        }
        else if (_args instanceof fornecedor_1.Fornecedor) {
            console.log('Lógica para Fornecedor');
        }
    }
    Brinquedo.prototype.mover = function () {
        console.log("Mover Brinquedo...");
    };
    return Brinquedo;
}());
exports.Brinquedo = Brinquedo;
