//Exemplo 01 - REST
function listaNome(...nomes:string[] ){
    return `${nomes.join(' ')}`;
}

//console.log(listaNome('João'));
//console.log(listaNome('João', 'Maria', 'Carlos'))

//Exemplo 02

function somar(...numeros: number[]){
    let t = 0;
    numeros.forEach(e => t += e);
    return t;
}

//console.log(somar(1,5));
//console.log(somar(1,5,4));
//console.log(somar(1,5,4,5));

//Exemplo 03 - REST

let num = [7,1,3,4];

//console.log(Math.max(...num));

//Exemplo 04 Tupla

let arr = [1,4,5];

let arr2 = ['teste 1', 'teste 2'];

let arr3 = [2,'teste', true];


let tupla:[string, number,boolean] = ['nome',12, true];

tupla[0] = 'teste';


let turma:[string, number, string] = ['Type Script',100,'Prof. Emerson'];

//console.log(turma[2]);


//exemplo 1 Enum

enum Cor{
    Azul,
    Verde,
    Vermelho
}

let c:Cor = Cor.Vermelho;

//console.log(c);

//console.log(Cor[2]); 

//Exemplo 02 - Enum

enum Dia_Semana{
    Domingo =1,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

let dia = Dia_Semana.Segunda;

//console.log(dia);

enum Dia_Semana2{
    Dom = "Domingo",
    Seg = "Segunda",
    Tec = "Terça",
    Qua = "Quarta",
    Qui = "Quinta",
    Sex = "Sexta",
    Sab = "Sábado"
}

let dia2 = Dia_Semana2.Seg;

//console.log(dia2);

enum Status{
    ATIVADO = "ATIVO",
    DESATIVADO = 0
}

// Exemplo 01 - Union

function imprimirId(id:string | number){
    if(typeof(id)=='string'){
        return "é uma string";
    }
        

//        console.log(id);
}


//console.log(imprimirId('asasa'));

//Exemplo 01 Type Alias

type Aluno = {
    nome : string,
    email: string
}


let aluno1:Aluno = {
    nome : "Jose",
    email : "jose@email.com "
}

let aluno2:Aluno = {
    nome : "Maria",
    email : "maria@email.com "
}

//Exemplo 02 Type Alias

type ID = string | number;

function imprimirId2(id:ID){
    console.log(id)
}

//imprimirId2(123);
//imprimirId2('123');

//Exemplo 1 Conversão de Tipos:

let codigo:any = 12;
let id = codigo as number;
//let id = <string>codigo;


//Exemplo 2 Conversão de Tipos:

class ContaBancaria{
    saldo: number;
}

class ContaInvestimento extends ContaBancaria {
    aplicacao : number;
}

let conta: ContaBancaria = new ContaInvestimento();

//let conta2 = <ContaInvestimento>conta;

let conta2 = conta as ContaInvestimento;

// Exemplo 03 conversão de tipos

let texto: string = "12";

let numero:number = parseInt(texto);

//console.log(typeof(texto));
//console.log(typeof(numero));

let num2:Number = 10;

let texto2:String = num2.toString();

console.log(typeof(texto2));
console.log(typeof(num2));