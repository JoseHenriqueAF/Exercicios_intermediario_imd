var array = [];

function inserir() {
    var num = Number(document.getElementById("entrada").value);
    array.push(num);
    imprimir();

}

function limpar() {
    array = []
    imprimir();
}

function maximo() {
    var maximo = 0;
    var resposta = "";
    if(array.length>0){
        maximo = array[0];
        for(i = 1; i<array.length; i++){
            if(array[i]> maximo){
                maximo = array[i];
            }
        }
        resposta = "O valor máximo da array é: "+maximo;
    } else {
        resposta = "O array está vazio, não temos valor máximo!"
    }

    return resposta;    
}

function imprimir() {
    var texto = "Array = ["+array+"] <br>";
    texto += maximo();
    document.getElementById("resultado").innerHTML = texto;  
}