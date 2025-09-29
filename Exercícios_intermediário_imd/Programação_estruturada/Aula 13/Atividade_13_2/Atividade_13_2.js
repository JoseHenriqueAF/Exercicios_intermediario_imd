function palindromo() {
    var texto = document.getElementById("texto").value;
    texto = texto.toLowerCase();
    var invertido = inverter(texto);
    var resultado = "";
    if(invertido === texto){
        resultado += "A palavra "+texto+" é um palíndromo."
    } else{
        resultado += "A palavra "+texto+" não é um palíndromo."
    }
    
    
    document.getElementById("resultado").innerHTML = resultado;
}

function inverter(s) {
    var retorno = "";

    // CASO BASE
    if (s === "") {
        retorno = "";
    // RECURSÃO
    } else {
        retorno = inverter(s.substr(1)) + s[0];
    } 

    return retorno;
}
