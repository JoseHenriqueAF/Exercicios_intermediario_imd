function FabricaDeRobos(modelo, material) {
    this.modelo = modelo;
    this.material = material;
    this.nivelEnergia = 100;
    this.pegarInfo = () => `Eu sou o ${this.modelo} e meu atual nível de energia é ${this.nivelEnergia}%.`;
}

let robo1 = new FabricaDeRobos('R2D2', 'Liga de Titânio');
let robo2 = new FabricaDeRobos('C3PO', 'Latão');

console.log(robo1.pegarInfo()); // Eu sou o R2D2 e meu atual nível de energia é 100%.
console.log(robo2.pegarInfo()); // Eu sou o C3PO e meu atual nível de energia é 100%.