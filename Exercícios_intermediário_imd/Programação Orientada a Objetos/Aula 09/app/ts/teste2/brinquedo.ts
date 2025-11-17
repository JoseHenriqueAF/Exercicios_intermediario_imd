import { Fornecedor } from "./fornecedor";
import { Vendedor } from "./vendedor";

export abstract class Brinquedo{

    abstract versao: number;

    constructor(private _velocidade: number){

    }
    public abstract mover():void;
}