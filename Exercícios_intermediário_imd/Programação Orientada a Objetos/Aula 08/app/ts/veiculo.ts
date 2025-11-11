import { Direcao } from "./direcao";
import { Motor } from "./motor";

export class Veiculo{

    protected _motor: Motor
    protected _direcao: Direcao;

    public constructor(
        readonly fabricante:string,
        private _modelo:string,
        private _cor: string,
        private _placa: string = "Sem placa",
        potencia: number){
        this._motor = new Motor(potencia);
        this._direcao = new Direcao();
    }
    
    public  get modelo(){
        return this._modelo;
    }

    public set modelo(modelo: string){
        this._modelo = modelo;
    }

    public  get cor(){
        return this._cor;
    }

    public set cor(cor: string){
        this._cor = cor;
    }
    
    public  get placa(){
        return this._placa;
    }

    public set placa(placa: string){
        this._placa = placa;
    }

    public ligar(){
        console.log("Veiculo ligado ...")
    }

    public get motor() : Motor {
        return this._motor
    }

    public set motor(motor : Motor) {
        this._motor = motor;
    }
   
    public get direcao() : Direcao {
        return this._direcao;
    }
    
   public set direcao(direcao : Direcao) {
       this._direcao = direcao;
   }
    
   public exibirInformacoes() {
    console.log(`
    INFORMAÇÕES:
    Fabricante: ${this.fabricante},
    Modelo: ${this.modelo},
    Cor: ${this.cor},
    Placa: ${this.placa},
    Potência: ${this._motor.potencia}
    `)
}


}