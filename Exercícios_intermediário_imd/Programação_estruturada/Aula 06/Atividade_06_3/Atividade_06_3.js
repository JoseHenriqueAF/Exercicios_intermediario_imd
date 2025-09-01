function extremos() {
    var valor1 = Number(document.getElementById("valor1").value);
    var valor2 = Number(document.getElementById("valor2").value);
    var valor3 = Number(document.getElementById("valor3").value);
    var valor4 = Number(document.getElementById("valor4").value);
    var valor5 = Number(document.getElementById("valor5").value);
    //console.log(valor2+" e o tipo é "+ typeof(valor2));

    var minimo = Math.min(valor1,valor2,valor3,valor4,valor5) ;
    var maximo = Math.max(valor1,valor2,valor3,valor4,valor5) ;
    console.log("O valor máximo é "+maximo+" e  tipo é"+ typeof(maximo));
    document.getElementById("minimo").innerHTML = "Valor Mínimo é "+minimo;
    document.getElementById("maximo").innerHTML = "Valor Máximo é "+maximo;
}

