function decimal() {
    var valor_txt = document.getElementById("valor").value;
    var decimais_txt = document.getElementById("decimais").value;

    var valor = Number(valor_txt);
    var decimais = Number(decimais_txt);
    var resultado = valor.toFixed(decimais);
    document.getElementById("saida").innerHTML = resultado;
}

