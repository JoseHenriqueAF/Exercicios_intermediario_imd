export class Estudante {
    constructor(
        readonly id:string,
        public _nome: string,
        private _creditos: number
    ){
        if(_creditos == undefined || _creditos <=0  ){
            this._creditos = 1;
        }
    }

    
    public get numId() : string {
        return this.id;
    }
    
    
    public set numCreditos(creditos : number) {
        if (this._creditos <= 0){
            this._creditos = 1;
        } else {
            this._creditos = creditos;
            
        }
    }
    
    public get numCreditos() : number {
        return this._creditos;
    }

    
    public get nome() : string {
        return this._nome; 
    }
    
    
    public exibirInfo(){
        console.log(`
            INFORMAÇÕES
            ID      : ${this.id}
            Nome    : ${this._nome}
            Créditos: ${this._creditos}
            `)
    }



}