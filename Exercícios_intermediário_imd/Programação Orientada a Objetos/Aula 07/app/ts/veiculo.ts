import { Direcao } from "./direcao";
import { Motor } from "./motor";

export class Veiculo{

    protected _motor: Motor
    protected _direcao: Direcao;

    public constructor(potencia: number){
        this._motor = new Motor(potencia);
        this._direcao = new Direcao();
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

}