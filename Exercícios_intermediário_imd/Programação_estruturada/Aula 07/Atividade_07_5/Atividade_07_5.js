function inserir() {
    var texto = document.getElementById("entrada").value;
    var textoInserido = document.getElementById("insercao").value;

    var quebra = Number(document.getElementById("posicao").value);
    var anterior = texto.slice(0,quebra);
    var posterior = texto.slice(quebra);
    var novoTexto = anterior + textoInserido + posterior;
    document.getElementById("saida").innerHTML = novoTexto;


    //console.log("posterior é " +posterior);
    // console.log("Anterior é " +anterior);
}
