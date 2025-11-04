import { Transporte } from "./transporte";

export class Terrestre extends Transporte {
    private _numRodas : number;
    
    public get numRodas() : number {
        return this._numRodas;
    }
    
    
    public set numRodas(numRodas : number) {
        this._numRodas = numRodas;
    }
    
    public exibirInformacoes(){
            console.log(`Capacidade: ${this.capacidade}.\nRodas ${this._numRodas}`);
    }
}