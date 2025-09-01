function aleatorio() {
    var min_txt = Number(document.getElementById("minimo").value);
    var max_txt = Number(document.getElementById("maximo").value);
    var valor = noIntervalo(min_txt, max_txt);
    document.getElementById("saida").innerHTML = valor;
}

function noIntervalo(min, max){
   

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}