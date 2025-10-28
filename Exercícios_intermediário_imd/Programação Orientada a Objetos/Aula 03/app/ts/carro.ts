export class Carro{

    modelo: string;
    _cor: string;
    placa: string;
    numPortas: number;

    constructor(modelo:string, cor: string, placa?: string, numPortas?: number){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.numPortas = numPortas;
    }

    get cor(): string{
        return this._cor;
    }

    set cor(cor: string){
        this._cor = cor;
    }

    
    public get numPlaca() : string {
        return this.placa;
    }

    
    public get mostrarPortas() : number {
        return this.numPortas;
    }
    
    
    
}