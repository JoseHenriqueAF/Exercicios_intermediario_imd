"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var emailinvalidoerror_1 = require("./erros/emailinvalidoerror");
var nomeinvalidoerror_1 = require("./erros/nomeinvalidoerror");
var Usuario = /** @class */ (function () {
    function Usuario(email, nome) {
        this.email = email;
        this.nome = nome;
    }
    Usuario.criarUsuario = function (email, nome) {
        //teste para validar o email
        if (!this.emailInvalido(email)) {
            // lançar uma exceção
            throw new emailinvalidoerror_1.EmailInvalidoError();
        }
        //teste para validar o nome
        if (!this.nomeInvalido(nome)) {
            // lançar uma exceção
            throw new nomeinvalidoerror_1.NomeInvalidoError();
        }
        return new Usuario(email, nome);
    };
    Usuario.emailInvalido = function (email) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };
    Usuario.nomeInvalido = function (nome) {
        if (nome.length > 10 || nome == "") {
            return false;
        }
        return true;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
