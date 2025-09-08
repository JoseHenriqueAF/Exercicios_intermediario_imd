function maiuscula() {
    var palavra = document.getElementById("entrada").value;
    var primeiraLetra = palavra.slice(0,1);
    var letraMaiuscula = primeiraLetra.toUpperCase(); 
    var novaPalavra = palavra.replace(primeiraLetra, letraMaiuscula);
    document.getElementById("saida").innerHTML = novaPalavra;
}
