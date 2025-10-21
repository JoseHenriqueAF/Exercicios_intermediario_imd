var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Moto.prototype.getCor = function () {
        return this.cor;
    };
    return Moto;
}());
var moto1 = new Moto();
moto1.setCor("Laranja");
console.log(moto1.getCor());
