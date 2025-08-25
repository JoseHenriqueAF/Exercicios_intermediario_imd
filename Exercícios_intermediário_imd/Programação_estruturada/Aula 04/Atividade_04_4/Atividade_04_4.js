function pitagoras() {
    //document.getElementById("saida").innerHTML = "FUNCIONANDO";
    var cateto1 = ler_entrada("cateto1");
    var cateto2 = ler_entrada("cateto2");
    var hipotenusa = ler_entrada("hipotenusa")
    escrever_saida("saida",(quadrado(cateto1)+quadrado(cateto2))== quadrado(hipotenusa));

    
}

function ler_entrada(campo){
    return Number(document.getElementById(campo).value);
    
}

function escrever_saida(campo, valor){
    document.getElementById(campo).innerHTML = valor;
}

function quadrado(x){
    return x*x;
}