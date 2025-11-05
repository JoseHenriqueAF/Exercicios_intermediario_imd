let naveEspacial = {
    planetaOrigem: 'Terra',
    tripulacao:  5,
    'Missão Ativa': true,
    cor: 'prata',
    'Tipo de Combustível': 'Hidrogênio',
    trajeto: ['Vênus', 'Marte', 'Saturno']
}

naveEspacial.cor = "branca";
naveEspacial['Nome do Piloto'] = 'bob';

let nomePiloto = naveEspacial['Nome do Piloto'];

delete naveEspacial['planetaOrigem'];
delete naveEspacial['trajeto'];

console.log(naveEspacial);