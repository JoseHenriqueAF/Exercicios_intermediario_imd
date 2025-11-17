"use strict";
// import { Aviao } from "./teste2/aviao";
// import { Barco } from "./teste2/barco";
// import { Brinquedo } from "./teste2/brinquedo";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
// //let brinquedo = new Brinquedo(100);
// // let brinquedo:Brinquedo = new Aviao(900);
// // brinquedo.mover();
// // brinquedo = new Barco(300,1);
// // brinquedo.mover();
// // //let barco = new Barco(300);
// // abstract class Teste extends Brinquedo{
// // }
// interface Pessoa {
//     nome: string;
//     anoNascimento?: number;
//     imprimirNome?: () => void;
// }
// interface Pessoa2 {
//     sobrenome: string;
// }
// let p1: Pessoa = {
//     nome: 'Zezinho',
//     anoNascimento: 2000,
//     imprimirNome(): void {
//         console.log(this.nome)
//     }
// }
// let pessoas: Pessoa[] = [
//     { nome: 'João', anoNascimento: 2000 },
//     { nome: 'Maria', anoNascimento: 1997 },
//     { nome: 'José', anoNascimento: 2003 },
//     { nome: 'Luluzinha', anoNascimento: 2002 },
//     { nome: 'Bolinha' },
//     p1
// ]
// function listaNomes(p: Pessoa[]) {
//     p.forEach(prop => console.log(prop.nome))
// }
// //listaNomes(pessoas);
// if (p1.imprimirNome) {
//     p1.imprimirNome();
// }
// function calculaIdade(p: Pessoa) {
//     let idade: number;
//     if (p.anoNascimento) {
//         idade = new Date().getFullYear() - p.anoNascimento;
//         console.log(`Idade: ${idade}`);
//     }
// }
// let p2 = { nome: 'Luluzinha', anoNascimento: 2001, endereco: 'Rua X' }
// //calculaIdade(p2);
// calculaIdade({ nome: 'Luluzinha', anoNascimento: 2001, endereco: 'Rua X' } as Pessoa);
// interface Aluno extends Pessoa, Pessoa2 {
//     matricula: string;
// }
// let aluno: Aluno = {
//     matricula: '1',
//     nome: 'Francisco',
//     sobrenome: 'Silva'
// }
// class Pessoa3 {
// }
// class Funcionario extends Pessoa3 implements Pessoa, Pessoa2 {
//     cpf: string;
//     nome: string;
//     anoNascimento: number;
//     sobrenome: string
//     imprimirNome(): void {
//         console.log(`Nome do funcionário: ${this.nome}`);
//     }
// }
// let f1 = new Funcionario();
// f1.nome = 'Luiz'
// f1.imprimirNome();
var carro = new carro_1.Carro('Fiat', 'Palio', 'Branco', 1000);
carro.condutor = { nome: 'Luiz', cnh: '122121qweeqweq' };
var cond = {
    nome: 'Luiz',
    cnh: '2312dasdasdasda'
};
carro.condutor = cond;
console.log(carro.condutor);
