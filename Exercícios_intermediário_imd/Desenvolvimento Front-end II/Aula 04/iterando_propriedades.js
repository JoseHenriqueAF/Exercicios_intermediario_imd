let naveEspacial = {
    tripulacao: {
        capitao: {
            nome: 'Daniel',
            especialidade: 'Engenharia da Computação',
            cumprimentar() { console.log('Olá pessoal, sou o Cap. Daniel.') }
        },
        medico: {
            nome: 'Alice',
            especialidade: 'Medicina',
            anunciar() { console.log('Realizando exames periódicos na tripulação!') }
        },
        cientista: {
            nome: 'Carla',
            especialidade: 'Física',
            pesquisar() { console.log('Iniciando pesquisa sobre a teoria da relatividade...') }
        }
    }
}

for (let membro in naveEspacial.tripulacao) {
    console.log(`${membro}: ${naveEspacial.tripulacao[membro].nome}`);
}