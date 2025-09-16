function calcular() {
    var numero = Number(document.getElementById("N").value);
    var soma = 0;

    if (numero < 0){
        document.getElementById("resultado").innerHTML = "Número negativo";
    }else{
        for(i=1; i<numero; i++){
            if((i%3 === 0) || (i%5 ===0)){
                soma = soma + i;
            }
        }
        document.getElementById("resultado").innerHTML = "A soma dos mútiplos de 5 e 3 inferiores a "+ numero + " é: "+soma+"."; 
    }
}

