//Exemplo 01

let lista = new Array<string>();

//lista.push(10);
lista.push('texto');

//console.log(lista[0].substring(0,3));

//Exemplo 02

function info<T>(arg:T):T{
    return arg;
}
let i = info<number>(2);


//console.log(info(2));
//console.log(info('texto'));

//Exemplo 03

class Professor{
    constructor(public nome:string){

    }
}

class Aluno{
    constructor(public nome:string){
        
    }
}

interface temNome{
    nome: string;
}



function imprimirNome<T extends temNome>(obj:T) {
    console.log(obj.nome);
}

let p = new Professor('Mario');
let a = new Aluno('Lucia');

//imprimirNome(p);
//imprimirNome(a);

interface GenericTest<T>{
    test(arg: T): T;
}

class Teste1 implements GenericTest<number>{

    test(arg: number):number{
        return arg;
    }

}

class Teste2 implements GenericTest<string>{

    test(arg: string):string{
        return arg;
    }

}

//let teste = new Teste1();
//console.log(teste.test('10'));

//Exemplo 05

class ListaGenerica<T,K>{
    private _id : K;

    constructor(id:K){
        this._id = id;
    }
    lista: T[] = [];

    adicionar(arg:T ){
        this.lista.push(arg);
    }

    imprimir(){
        this.lista.forEach(e => console.log(e));
    }

    
    public get id() : K {
        return this._id;
    }
    
}

let listg2 = new ListaGenerica<string,number>(12);
listg2.adicionar('texto-01');
listg2.adicionar('texto-02');
listg2.adicionar('texto-03');

//listg2.imprimir();

//console.log(listg2.id);


// Exemplo 06   ~Decorations
//@exemploDecoratorClasse
//@decorator("Aula POO")
@dataDecorator
class Pessoa{
    constructor(){
        console.log("Objeto Criado");
    }
}

//new Pessoa();
//new Pessoa();
//new Pessoa();

function exemploDecoratorClasse(construtor: Function){
    //console.log(construtor.toString());
    console.log("decorator foi chamado...");
}

function decorator(valor: string){
    return function(construtor: Function){
        console.log(`Valor: ${valor}`)
    }
}


function dataDecorator(construtor:{new(...args: any[]): {}}){
    return class extends construtor{
        constructor(...args: any[]){
            console.log("inicio da execução...");
            console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
            super(args);
            console.log("fim da execução...");
        }
    }
}

//Exemplo 08

class ContaBancaria{
    @validacao()
    public _saldo: number;

    constructor(saldo: number){
        this._saldo = saldo;
    }

    @test()
    public sacar(valor: number){
        this._saldo -= valor;
        console.log("saque realizado");
    }

    
    public get saldo() : number {
        return this._saldo;
    }
    
}

function test(){
    return function(target: any, nomePropriedade: string, descritor: PropertyDescriptor){
        //console.log(`Nome do método: ${nomePropriedade}`);
        let metodoOriginal  = descritor.value;
        descritor.value = function(...args: any[]){
            console.log("Comandos antes da execução do método....");
            let retorno = metodoOriginal.apply(this, args);

            console.log("Comandos depois da execução do método....");

            return retorno;
        }

        return descritor;
    }
}

//Exemplo 09

function validacao(){
    return function(target: any, nomeDaPropriedade: string){
        //console.log(`Atributo => ${nomeDaPropriedade}`);

        let val = target[nomeDaPropriedade];

        let getter = () => val;

        let setter = (value: number) => {
            if (value < 0 ){
                throw new Error('Valor negativo.....0')
            } else {
                val = value;
            }
        }

        Object.defineProperty(target, nomeDaPropriedade,{
            get: getter,
            set: setter
        })
    }
}



let conta = new ContaBancaria(100);
try{
    conta._saldo = -100;
} catch(e){
    console.log(e.message);
} finally{
    console.log(conta.saldo);
}

//conta.sacar(30);
console.log(conta.saldo);
