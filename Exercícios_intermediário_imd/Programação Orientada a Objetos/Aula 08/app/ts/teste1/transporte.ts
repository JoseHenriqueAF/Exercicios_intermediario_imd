export class Transporte{

    protected _capacidade: number;

    public constructor(capacidade: number){
        this._capacidade = capacidade;
    }

    public get capacidade() : number {
        return this._capacidade;
    }

    public set capacidade(capacidade : number) {
        this._capacidade = capacidade;
    }
    
    public exibirInformacoes(){
        console.log(`Capacidade: ${this._capacidade}`)
    }
    

}