function converter() {
    var minutos = Number(document.getElementById("minutos").value);   
    var horas = Math.floor(minutos/60);
    var minutosRestantes = minutos - horas*60; 
    //console.log ("Horas "+ horas + " <br>" +"Minutos: "+ minutosRestantes);
    var saida = horas +"h"+minutosRestantes+"m";
    document.getElementById("saida").innerHTML = saida;
}
