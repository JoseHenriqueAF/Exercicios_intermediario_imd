var maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var minusculas = 'abcdefghijklmnopqrstuvwxyz';

function inverter() {
    var str = document.getElementById("entrada").value + "";

    var str_upper = str.toUpperCase();
    var str_lower = str.toLowerCase();
    var invertida = "";
    for(i=0; i < str.length; i++){
        if (str_upper[i] === str[i]){
            invertida += str[i].toLowerCase();
        } else{
            invertida += str[i].toUpperCase();      
        }
    }


    var resultado = "A palavra invertidade é: "+invertida+".";
  
    document.getElementById("resultado").innerHTML = resultado;
}