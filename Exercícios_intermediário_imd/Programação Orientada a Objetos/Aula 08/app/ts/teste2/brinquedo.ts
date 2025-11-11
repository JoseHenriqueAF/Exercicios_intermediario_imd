import { Fornecedor } from "./fornecedor";
import { Vendedor } from "./vendedor";

export class Brinquedo{

    constructor(private _velocidade: number, _args: any){

        if(typeof _args == 'number'){
            console.log(`${typeof _args}: número passado comp parâmetro`);
        }else if(typeof _args == 'string'){
            console.log(`${typeof _args}: texto passado comp parâmetro`);
        }else if (_args instanceof Vendedor){
            console.log('Lógica para vendedor');
        }else if(_args instanceof Fornecedor){
            console.log('Lógica para Fornecedor');
        }
    }

    public mover(){
        console.log(`Mover Brinquedo...`);
    }
}