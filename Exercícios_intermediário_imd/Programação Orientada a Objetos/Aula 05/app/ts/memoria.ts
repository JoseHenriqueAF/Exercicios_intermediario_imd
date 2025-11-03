export class Memoria{
    public constructor(private _tamanho: number){}// 3 ou 4 gb;

    
    public get tamanho() : number {
        return this._tamanho;
    }
    
}