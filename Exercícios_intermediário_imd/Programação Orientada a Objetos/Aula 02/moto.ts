class Moto{
    cor: string;

    setCor(cor: string): void{
        this.cor = cor;

    }

    getCor():string{
        return this.cor;
    }    
} 


let moto1 = new Moto();

moto1.setCor("Laranja");

console.log(moto1.getCor());


