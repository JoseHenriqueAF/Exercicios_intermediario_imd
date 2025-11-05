let naveEspacial = {
    tripulacao:  5,
    'Missão Ativa': true,
    trajeto: ['Vênus', 'Marte', 'Saturno']
}

function desativarMissao(obj) {
    obj['Missão Ativa'] = false;
}

let adicionarJupiterNoTrajeto = (obj) => {
    obj.trajeto.push('Júpiter');
}

desativarMissao(naveEspacial);
adicionarJupiterNoTrajeto(naveEspacial);

console.log(naveEspacial.trajeto[3]);