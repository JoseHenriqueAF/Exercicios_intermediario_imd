function exibir() {
    var texto = document.getElementById("texto").value;
    var resultado = "";

    var palavras = misturar(texto);
    for (var i = 0; i < palavras.length; i++) {
        resultado = resultado + palavras[i] + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function misturar(texto) {
    var resultados = [];


    if (texto.length === 1) {

        return [texto];
    }



    for (var i = 0; i < texto.length; i++) {
        var charAtual = texto[i];



        var subStringRestante = texto.slice(0, i) + texto.slice(i + 1);

        var subPermutacoes = misturar(subStringRestante);

 
        for (var j = 0; j < subPermutacoes.length; j++) {
 
            resultados.push(charAtual + subPermutacoes[j]);
        }
    }

 
    return resultados;
}