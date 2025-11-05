let naveEspacial = {
    passageiros: [{nome: 'cachorro espacial'}, {nome: 'gato espacial'}],
    tripulacao: {
        capitao: {
            nome: 'Daniel',
            especialidade: 'Engenharia da Computação',
            'comidas favoritas': ['bolo', 'cuscuz', 'pipoca'],
            cumprimentar() { console.log('Olá pessoal, sou o Cap. Daniel.') }
        }
    },
    motor: {
        modelo: 'RocketDyne F1',
        ano: 2017,
        potencia: 4400
    }
}

naveEspacial.tripulacao.capitao.cumprimentar();