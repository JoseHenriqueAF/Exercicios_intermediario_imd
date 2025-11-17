import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {


    public constructor(
        fabricante: string,
        modelo: string,
        cor: string,
        potencia: number,
        placa: string = "Sem placa",
        private _numPortas: number = 2) {

        super(fabricante,modelo,cor,placa,potencia);

        if (_numPortas < 2) {
            this._numPortas = 2
        }
    }

    public ligar() {
        console.log("Carro ligado ...")
    }

    public get numPortas(): number {
        return this._numPortas;
    }

    public set numPortas(numPortas: number) {

        if (numPortas < 2) {
            this._numPortas = 2;
        } else {
            this._numPortas = numPortas;
        }

    }


    public exibirInformacoes() {
        console.log(`
        INFORMAÇÕES:
        Fabricante: ${this.fabricante},
        Modelo: ${this.modelo},
        Cor: ${this.cor},
        Placa: ${this.placa},
        Portas: ${this._numPortas},
        Potência: ${this._motor.potencia}
        `)
    }

}