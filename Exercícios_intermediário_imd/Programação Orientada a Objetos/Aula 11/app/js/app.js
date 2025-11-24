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
//Exemplo 01 - REST
function listaNome() {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    return "".concat(nomes.join(' '));
}
//console.log(listaNome('João'));
//console.log(listaNome('João', 'Maria', 'Carlos'))
//Exemplo 02
function somar() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var t = 0;
    numeros.forEach(function (e) { return t += e; });
    return t;
}
//console.log(somar(1,5));
//console.log(somar(1,5,4));
//console.log(somar(1,5,4,5));
//Exemplo 03 - REST
var num = [7, 1, 3, 4];
//console.log(Math.max(...num));
//Exemplo 04 Tupla
var arr = [1, 4, 5];
var arr2 = ['teste 1', 'teste 2'];
var arr3 = [2, 'teste', true];
var tupla = ['nome', 12, true];
tupla[0] = 'teste';
var turma = ['Type Script', 100, 'Prof. Emerson'];
//console.log(turma[2]);
//exemplo 1 Enum
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Vermelho"] = 2] = "Vermelho";
})(Cor || (Cor = {}));
var c = Cor.Vermelho;
//console.log(c);
//console.log(Cor[2]); 
//Exemplo 02 - Enum
var Dia_Semana;
(function (Dia_Semana) {
    Dia_Semana[Dia_Semana["Domingo"] = 1] = "Domingo";
    Dia_Semana[Dia_Semana["Segunda"] = 2] = "Segunda";
    Dia_Semana[Dia_Semana["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    Dia_Semana[Dia_Semana["Quarta"] = 4] = "Quarta";
    Dia_Semana[Dia_Semana["Quinta"] = 5] = "Quinta";
    Dia_Semana[Dia_Semana["Sexta"] = 6] = "Sexta";
    Dia_Semana[Dia_Semana["Sabado"] = 7] = "Sabado";
})(Dia_Semana || (Dia_Semana = {}));
var dia = Dia_Semana.Segunda;
//console.log(dia);
var Dia_Semana2;
(function (Dia_Semana2) {
    Dia_Semana2["Dom"] = "Domingo";
    Dia_Semana2["Seg"] = "Segunda";
    Dia_Semana2["Tec"] = "Ter\u00E7a";
    Dia_Semana2["Qua"] = "Quarta";
    Dia_Semana2["Qui"] = "Quinta";
    Dia_Semana2["Sex"] = "Sexta";
    Dia_Semana2["Sab"] = "S\u00E1bado";
})(Dia_Semana2 || (Dia_Semana2 = {}));
var dia2 = Dia_Semana2.Seg;
//console.log(dia2);
var Status;
(function (Status) {
    Status["ATIVADO"] = "ATIVO";
    Status[Status["DESATIVADO"] = 0] = "DESATIVADO";
})(Status || (Status = {}));
// Exemplo 01 - Union
function imprimirId(id) {
    if (typeof (id) == 'string') {
        return "é uma string";
    }
    //        console.log(id);
}
var aluno1 = {
    nome: "Jose",
    email: "jose@email.com "
};
var aluno2 = {
    nome: "Maria",
    email: "maria@email.com "
};
function imprimirId2(id) {
    console.log(id);
}
//imprimirId2(123);
//imprimirId2('123');
//Exemplo 1 Conversão de Tipos:
var codigo = 12;
var id = codigo;
//let id = <string>codigo;
//Exemplo 2 Conversão de Tipos:
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
    }
    return ContaBancaria;
}());
var ContaInvestimento = /** @class */ (function (_super) {
    __extends(ContaInvestimento, _super);
    function ContaInvestimento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContaInvestimento;
}(ContaBancaria));
var conta = new ContaInvestimento();
//let conta2 = <ContaInvestimento>conta;
var conta2 = conta;
// Exemplo 03 conversão de tipos
var texto = "12";
var numero = parseInt(texto);
//console.log(typeof(texto));
//console.log(typeof(numero));
var num2 = 10;
var texto2 = num2.toString();
console.log(typeof (texto2));
console.log(typeof (num2));
