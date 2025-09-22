var array = [];
var soma = 0;
var produto = 1;

function inserir() {
    var num = Number(document.getElementById("entrada").value);
    array.push(num);
    atualizar();
}

function atualizar() {
    var texto = "A array atual é: ["+array+"]. <br>"

    for(i=0;i<array.length;i++){
        soma += array[i];
        produto *= array[i];
    }

    texto += "A soma dos elementos é: "+soma+". <br>";
    texto += "O produto dos elementos é: "+produto+". <br>";
    soma = 0;
    produto= 1;

    document.getElementById("resultado").innerHTML = texto;
}
