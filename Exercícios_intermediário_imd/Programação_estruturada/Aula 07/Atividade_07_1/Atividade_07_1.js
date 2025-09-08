function vazia() {
    var entrada = document.getElementById("entrada").value;
    var resposta = entrada.length == 0;
    document.getElementById("saida").innerHTML = resposta;
}
