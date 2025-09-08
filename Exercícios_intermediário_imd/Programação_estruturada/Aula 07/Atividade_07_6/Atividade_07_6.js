function verificar_minuscula() {
    var palavra = document.getElementById("entrada").value;
    var palavraMinuscula = palavra.toLowerCase();
    var saida = palavra == palavraMinuscula;
    document.getElementById("saida").innerHTML = saida;
}
