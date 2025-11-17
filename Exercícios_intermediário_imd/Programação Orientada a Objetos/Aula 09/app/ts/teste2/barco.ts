import { Brinquedo } from "./brinquedo";

export class Barco extends Brinquedo{
  
    //versao:number = 1;

    constructor(vel: number, public versao: number){
        super(vel);
    }

    public mover():void{
        console.log('Navegar...');
        
    }
    

}