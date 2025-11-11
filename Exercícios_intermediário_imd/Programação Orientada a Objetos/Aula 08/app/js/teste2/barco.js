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
exports.Barco = void 0;
var brinquedo_1 = require("./brinquedo");
var Barco = /** @class */ (function (_super) {
    __extends(Barco, _super);
    function Barco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Barco.prototype.mover = function () {
        console.log("Navegar...");
    };
    return Barco;
}(brinquedo_1.Brinquedo));
exports.Barco = Barco;
