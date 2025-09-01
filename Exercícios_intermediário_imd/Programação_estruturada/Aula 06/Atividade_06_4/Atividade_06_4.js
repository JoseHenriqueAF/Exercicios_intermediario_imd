function natural() {
    var valor_txt = document.getElementById("valor").value;

    var valor = Number(valor_txt);

    var natural = Math.trunc(Math.abs(valor)) == valor;

    document.getElementById("saida").innerHTML = "É um número natural? "+natural;
}

