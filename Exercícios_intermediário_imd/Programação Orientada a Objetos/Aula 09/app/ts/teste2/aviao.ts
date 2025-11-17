import { Brinquedo } from "./brinquedo";

export class Aviao extends Brinquedo{

    versao:number = 1;

    public mover(){
        console.log(`Voar...`);
    }
}