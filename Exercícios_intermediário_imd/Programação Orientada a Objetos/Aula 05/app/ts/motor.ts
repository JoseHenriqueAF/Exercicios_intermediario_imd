export class Motor {

    private _potencia: number;

    public constructor(potencia: number) {
        this._potencia = potencia;
    }

    public get potencia(): number {
        return this._potencia;
    }

    public set potencia(potencia: number) {
        this._potencia = potencia;
    }

}