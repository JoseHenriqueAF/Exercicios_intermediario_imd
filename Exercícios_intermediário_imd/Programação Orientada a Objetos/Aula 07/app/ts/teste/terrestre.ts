
import { Transporte } from "./transporte";
export class Terrestre extends Transporte {

    private _numRodas: number;

    public constructor(numRodas: number, capacidade: number) {
        super(capacidade);
        this._numRodas = numRodas;
    }


    public set numRodas(numRodas: number) {
        this._numRodas = numRodas;
    }


    public get numRodas(): number {
        return this._numRodas;
    }

    public exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Rodas: ${this._numRodas}.`);
    }



}