function triangulo() {
    var v1 = Number(document.getElementById("valor1").value);
    var v2 = Number(document.getElementById("valor2").value);
    var v3 = Number(document.getElementById("valor3").value);
    var saida;
    if(v1 + v2 > v3 && v1+v3 > v2 && v2+v3> v1){
        saida = "Com esses lados da para fazer um triângulo";
    } else {
        saida = "Com esses lados não da para fazer um triângulo";
    }

    document.getElementById("saida").innerHTML = saida;
}
