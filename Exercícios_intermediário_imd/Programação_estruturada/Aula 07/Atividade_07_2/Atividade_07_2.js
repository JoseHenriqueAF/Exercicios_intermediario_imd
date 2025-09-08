function truncar() {
    var palavra = document.getElementById("texto").value;
    var quantidade = Number(document.getElementById("quantidade").value);    
    var saida = palavra.slice(0, quantidade)
    
    document.getElementById("saida").innerHTML = saida;
}
