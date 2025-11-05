let naveEspacial = {
    tripulacao: 5,
    'Missão Ativa': true,
    decolar: function () {
        console.log('Decolando...');
    },
    pousar() {
        console.log('Pousando!');
    }
}

naveEspacial.decolar();

naveEspacial.pousar();