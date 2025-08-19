function positivos() {
    escrever_saida("saida",true);
}

function ler_entrada(campo) {
    var x = Number(document.getElementById(campo).value);
    return x;
}

function escrever_saida(campo, valor) {
    if(maior(ler_entrada("entrada1"),0) && maior(ler_entrada("entrada2",0))){
        var x = true;
        document.getElementById(campo).innerHTML = x;
    } else {
        var x = false;
        document.getElementById(campo).innerHTML = x;
    }

    
}

function maior(valor, limiar) {

    return valor>=0
}
