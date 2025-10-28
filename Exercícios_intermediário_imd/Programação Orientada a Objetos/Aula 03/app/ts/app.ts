import {Carro} from './carro';

let c: Carro;
c = new Carro("Fiesta","Azul");
c.cor = "Vermelho";

let c2 = new Carro("Uno","Vermelho");

console.log(`A cor do carro c ${c.modelo} é ${c.cor}. Numeros de portas é ${c.mostrarPortas}. A placa é ${c.numPlaca}\nA cor do carro c2 ${c2.modelo} é ${c2.cor}.Numeros de portas é ${c2.mostrarPortas}. A placa é ${c2.numPlaca}`);