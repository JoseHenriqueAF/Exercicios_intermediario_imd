function exibir() {
    var n = Number(document.getElementById("numero_1").value);
    var m = Number(document.getElementById("numero_2").value);

    if (n > 0 && m > 0){
        resultado = "O MDC é " + mdc(n,m);
    } else {
        resultado = "Insira números maiores que zero.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function mdc(a,b) {
    
    if (b === 0) {
        return a;
    }
    
    
    return mdc(b, a % b);
}
