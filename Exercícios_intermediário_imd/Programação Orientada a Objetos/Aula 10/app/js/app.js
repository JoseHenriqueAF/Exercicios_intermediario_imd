"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contabancaria_1 = require("./projeto_conta/contabancaria");
// try {
//     let usuario = Usuario.criarUsuario('emerson@email.com', 'Emersonxxxxxxxxxxxxxxx');
//     console.log(`${usuario.nome} - ${usuario.email}`);
// } catch (e) {
//     if(e instanceof EmailInvalidoError){
//         console.log(`@ -> ${e.message}`);    
//     } else if(e instanceof NomeInvalidoError){
//         console.log(`N -> ${e.message}`);    
//     }
// }
// console.log("Programa Executando........");
var c1 = new contabancaria_1.ContaBancaria();
var c2 = new contabancaria_1.ContaBancaria();
try {
    c1.depositar(110);
}
catch (e) {
    console.log("".concat(e.message, " ").concat(e.valorInvalido, "."));
}
finally {
    console.log("Saldo da conta c1 ".concat(c1.saldo));
    console.log("Saldo da conta c2 ".concat(c2.saldo));
    console.log("-----------------------------");
}
try {
    c1.sacar(10);
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log("Saldo da conta c1 ".concat(c1.saldo));
    console.log("Saldo da conta c2 ".concat(c2.saldo));
    console.log("-----------------------------");
}
try {
    c1.transferir(50, c2);
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log("Saldo da conta c1 ".concat(c1.saldo));
    console.log("Saldo da conta c2 ".concat(c2.saldo));
    console.log("-----------------------------");
}
