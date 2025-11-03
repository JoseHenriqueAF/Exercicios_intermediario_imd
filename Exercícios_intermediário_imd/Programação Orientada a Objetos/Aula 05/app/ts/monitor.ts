export class Monitor{
    public constructor( private _modelo: string){} // rtzen ou samsung 

    
    public get modelo() : string {
        return  this._modelo;
    }
    
}