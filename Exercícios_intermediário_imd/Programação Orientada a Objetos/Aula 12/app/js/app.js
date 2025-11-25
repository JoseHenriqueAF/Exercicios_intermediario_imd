//Exemplo 01
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var lista = new Array();
//lista.push(10);
lista.push('texto');
//console.log(lista[0].substring(0,3));
//Exemplo 02
function info(arg) {
    return arg;
}
var i = info(2);
//console.log(info(2));
//console.log(info('texto'));
//Exemplo 03
var Professor = /** @class */ (function () {
    function Professor(nome) {
        this.nome = nome;
    }
    return Professor;
}());
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    return Aluno;
}());
function imprimirNome(obj) {
    console.log(obj.nome);
}
var p = new Professor('Mario');
var a = new Aluno('Lucia');
var Teste1 = /** @class */ (function () {
    function Teste1() {
    }
    Teste1.prototype.test = function (arg) {
        return arg;
    };
    return Teste1;
}());
var Teste2 = /** @class */ (function () {
    function Teste2() {
    }
    Teste2.prototype.test = function (arg) {
        return arg;
    };
    return Teste2;
}());
//let teste = new Teste1();
//console.log(teste.test('10'));
//Exemplo 05
var ListaGenerica = /** @class */ (function () {
    function ListaGenerica(id) {
        this.lista = [];
        this._id = id;
    }
    ListaGenerica.prototype.adicionar = function (arg) {
        this.lista.push(arg);
    };
    ListaGenerica.prototype.imprimir = function () {
        this.lista.forEach(function (e) { return console.log(e); });
    };
    Object.defineProperty(ListaGenerica.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ListaGenerica;
}());
var listg2 = new ListaGenerica(12);
listg2.adicionar('texto-01');
listg2.adicionar('texto-02');
listg2.adicionar('texto-03');
//listg2.imprimir();
//console.log(listg2.id);
// Exemplo 06   ~Decorations
//@exemploDecoratorClasse
//@decorator("Aula POO")
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        console.log("Objeto Criado");
    }
    Pessoa = __decorate([
        dataDecorator
    ], Pessoa);
    return Pessoa;
}());
//new Pessoa();
//new Pessoa();
//new Pessoa();
function exemploDecoratorClasse(construtor) {
    //console.log(construtor.toString());
    console.log("decorator foi chamado...");
}
function decorator(valor) {
    return function (construtor) {
        console.log("Valor: ".concat(valor));
    };
}
function dataDecorator(construtor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            console.log("inicio da execução...");
            console.log("".concat(new Date().getHours(), ":").concat(new Date().getMinutes()));
            _this = _super.call(this, args) || this;
            console.log("fim da execução...");
            return _this;
        }
        return class_1;
    }(construtor));
}
//Exemplo 08
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo) {
        this._saldo = saldo;
    }
    ContaBancaria.prototype.sacar = function (valor) {
        this._saldo -= valor;
        console.log("saque realizado");
    };
    Object.defineProperty(ContaBancaria.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        validacao()
    ], ContaBancaria.prototype, "_saldo", void 0);
    __decorate([
        test()
    ], ContaBancaria.prototype, "sacar", null);
    return ContaBancaria;
}());
function test() {
    return function (target, nomePropriedade, descritor) {
        //console.log(`Nome do método: ${nomePropriedade}`);
        var metodoOriginal = descritor.value;
        descritor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Comandos antes da execução do método....");
            var retorno = metodoOriginal.apply(this, args);
            console.log("Comandos depois da execução do método....");
            return retorno;
        };
        return descritor;
    };
}
//Exemplo 09
function validacao() {
    return function (target, nomeDaPropriedade) {
        //console.log(`Atributo => ${nomeDaPropriedade}`);
        var val = target[nomeDaPropriedade];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value < 0) {
                throw new Error('Valor negativo.....0');
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, nomeDaPropriedade, {
            get: getter,
            set: setter
        });
    };
}
var conta = new ContaBancaria(100);
try {
    conta._saldo = -100;
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log(conta.saldo);
}
//conta.sacar(30);
console.log(conta.saldo);
