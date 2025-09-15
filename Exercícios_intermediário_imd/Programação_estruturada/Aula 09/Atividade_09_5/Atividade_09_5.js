function calcular() {
    var v1 = Number(document.getElementById("valor1").value);
    var v2 = Number(document.getElementById("valor2").value);
    var resultado;
    var operacao = document.getElementById("operacao").value;
    if (operacao === "soma"){
        resultado = v1 + v2;
    } else if (operacao === "subtracao"){
        resultado = v1 - v2;
    } else if (operacao === "multiplicacao"){
        resultado = v1 * v2;
    } else if (operacao === "divisao"){
        resultado = v1/v2;
    }
    document.getElementById("saida").innerHTML = "O resultado é "+ resultado;

}
