const robo = {
    modelo: 'T-800',
    nivelEnergia: 90,
    pegarInfo() {
        return `Eu sou o ${this.modelo} e meu atual nível de energia é ${this.nivelEnergia}%.`;
    },
    carregarBateria() {
        this.nivelEnergia = 100;
    }
};

robo.carregarBateria();

console.log(robo.pegarInfo());