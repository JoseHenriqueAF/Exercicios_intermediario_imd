import { ContaBancaria } from "./projeto_conta/contabancaria";
import { EmailInvalidoError } from "./projeto_usuario/erros/emailinvalidoerror";
import { NomeInvalidoError } from "./projeto_usuario/erros/nomeinvalidoerror";
import { Usuario } from "./projeto_usuario/usuario";

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

let c1   = new ContaBancaria();
let c2 =  new  ContaBancaria();

try {
    c1.depositar(110);
} catch (e) {

    console.log(`${e.message} ${e.valorInvalido}.`);
    
} finally{
    console.log(`Saldo da conta c1 ${c1.saldo}`);
    console.log(`Saldo da conta c2 ${c2.saldo}`);
    console.log(`-----------------------------`)
}

try {
    c1.sacar(10);
} catch (e) {

    console.log(e.message);
    
} finally{
    console.log(`Saldo da conta c1 ${c1.saldo}`);
    console.log(`Saldo da conta c2 ${c2.saldo}`);
    console.log(`-----------------------------`)
}


try {
    c1.transferir(50,c2);
} catch (e) {

    console.log(e.message);
    
} finally{
    console.log(`Saldo da conta c1 ${c1.saldo}`);
    console.log(`Saldo da conta c2 ${c2.saldo}`);
    console.log(`-----------------------------`)
}
