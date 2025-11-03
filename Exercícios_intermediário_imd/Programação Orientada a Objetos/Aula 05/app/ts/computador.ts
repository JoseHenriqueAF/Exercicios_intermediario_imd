import { Teclado } from "./teclado";
import { Monitor } from "./monitor";
import { PlacaMae } from "./placamae";

export class Computador{

    private _teclado: Teclado;
    private _monitor: Monitor;
    private _placaMae: PlacaMae;
    
    public constructor(teclado: string,monitor: string, placaMae: string ){
        this._teclado = new Teclado(teclado);
        this._monitor = new Monitor(monitor);
        this._placaMae = new PlacaMae(placaMae);   
    }

    
    public get teclado() : Teclado {
        return this._teclado;
    }
    
    
    public get monitor() : Monitor {
        return this._monitor;
    }
    
    
    public get placaMae() : PlacaMae {
        return this._placaMae;
    }
    
}