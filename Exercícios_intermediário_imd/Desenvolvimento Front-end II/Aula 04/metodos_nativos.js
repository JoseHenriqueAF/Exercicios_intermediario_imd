const robo = {
    modelo: 'T-800',
    nivelEnergia: 85,
    ativo: true
};

novoRobo ={
    'Reconhecimento de Voz': true, 
    versao: '1.3.1',
    tipo: 'primitivo'
}

const chavesRobo = Object.keys(robo);
//console.log(chavesRobo); // [ 'modelo', 'nivelEnergia', 'ativo' ]

const valoresRobo = Object.values(robo);
//console.log(valoresRobo); // [ 'T-800', 85, true ]

const entradasRobo = Object.entries(robo)
//console.log(entradasRobo); // [ [ 'modelo', 'T-800' ], [ 'nivelEnergia', 85 ], [ 'ativo', true ] 

const novoRobo1 = Object.assign(novoRobo, robo);
console.log(novoRobo1); // { 'Reconhecimento de Voz': true, versao: '1.3.1', modelo: 'T-800', nivelEnergia: 85, ativo: true }