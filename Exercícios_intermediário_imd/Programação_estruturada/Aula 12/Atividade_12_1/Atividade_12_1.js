// Primeiramente, entenda o código já existente

var array = [];
var ordenado = [];
exibir();


function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    //ordenado.push(x);
    exibir();
    maior();
}

function limpar() {
    array = [];
    ordenado = [];
    exibir();
    maior();
}

function exibir(){
    var texto = "Array = [" + array + "] <br>";
    document.getElementById("array").innerHTML = texto;
}

function maior() {
    var resultado = "";
    var x = Number(document.getElementById("ordem").value);
    ordenado = array.slice();
    ordenado.sort(comparar);
    
    if(x>ordenado.length){
        resultado += "É maior que o tamanho da array, erro!";
    } else if(ordenado.length === 0){
        resultado += "Array vazia!";
    } else if(x === 0 ){
        resultado += "Posição ainda não iniciada";
    } else {
        resultado += "O valor na ordem é :"+ ordenado[x-1];
    }
    
    //console.log("tamanho da array original "+array.length +". "+"valor de N ="+x+"."+ "Teste lógico"+(x>array.length))

    exibir();
    document.getElementById("resultado").innerHTML = resultado;
}

function comparar(a, b){
    return a - b;
}