import { Veiculo } from "./veiculo";

export class Moto extends Veiculo{
    
    public ligar():void{
        console.log('Moto ligada ...');
    }
}