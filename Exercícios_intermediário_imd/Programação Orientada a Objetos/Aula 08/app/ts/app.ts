import { Carro } from "./carro";
import { Moto } from "./moto";
import { Motor } from "./motor";
import { Aviao } from "./teste2/aviao";
import { Barco } from "./teste2/barco";
import { Brinquedo } from "./teste2/brinquedo";
import { Fornecedor } from "./teste2/fornecedor";
import { Vendedor } from "./teste2/vendedor";
import { Veiculo } from "./veiculo";

// let brinquedo = new Brinquedo(100);
// let aviao = new Aviao(900);
// let barco = new Barco(300);

// function movimentarBrinquedo(b: Brinquedo){
//     b.mover();
// }

// movimentarBrinquedo(brinquedo);
// movimentarBrinquedo(aviao);
// movimentarBrinquedo(barco);


// let m = new Motor(1000);

// let vend = new Vendedor('Joy');
// let forn = new Fornecedor('Toy');

// let b1 = new Brinquedo(100,1);
// let b2 = new Brinquedo(100,"texto");
// let b3 = new Brinquedo(100,vend);
// let b4 = new Brinquedo(100,forn);

let carro1 = new Carro("FORD","KA","Vermelho",1000,"ASD-0909",4);
let carro2 = new Carro("FIAT","MOBI","Branco",1000,"QWE-9878");
let moto1 = new Moto("Honda","CB 650R","Preta","YUI-7676",650);
let moto2 = new Moto("Yamaha","XMAX 250","Azul","TRE-6655",250);

// carro1.exibirInformacoes();
// carro2.exibirInformacoes();
// moto1.exibirInformacoes();
// moto2.exibirInformacoes();

let listaVeiculos: Veiculo[] = [carro1,carro2,moto1,moto2];

// for (let i = 0; i < listaVeiculos.length; i++) {
//     let veic:Veiculo = listaVeiculos[i];
    
//     if(veic instanceof Carro){
//         console.log(`Modelo do carro: ${veic.modelo}`);    
//     }else if(veic instanceof Moto){
//         console.log(`Modelo do Moto: ${veic.modelo}`);    
//     }
// }


listaVeiculos
    .filter(v => v instanceof Carro)
    .forEach(v => console.log(`Carro: ${v.modelo}`))


    class Teste extends Error{

        

    }



