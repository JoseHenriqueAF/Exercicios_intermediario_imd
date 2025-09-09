function difDatas() {
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data2").value);
    
    console.log(data1.getTime());
    var data3 = data2 - data1;
    
    var difMilisegundos = data3;

    var saida = "A diferença em Milisegundos é de " + difMilisegundos + "s."+"<br>";

    var difDias = Math.floor(difMilisegundos/(1000*60*60*24))

    var saida = saida + "A diferença em dias é de " + difDias +" dias.";
    document.getElementById("saida").innerHTML = saida;
}
