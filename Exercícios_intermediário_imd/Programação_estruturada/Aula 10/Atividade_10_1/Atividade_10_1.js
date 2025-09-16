function processar() {
    var numero = Number(document.getElementById("entrada").value);
    var texto = "";
    
    
    for(i=0; i<= numero; i++){
        texto = texto +"O número "+i+" é "+parOuImpar(i)+"<br>";

    }

    document.getElementById("resultado").innerHTML = texto;
}

function parOuImpar(num){
    if (num%2 === 0){
        return "Par";
    } else {
        return "Ímpar";
    }
}