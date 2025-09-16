function mdc() {
    var valor1 = Number(document.getElementById("A").value);
    var valor2 = Number(document.getElementById("B").value);

    
    var aux = 0;
    var v1 = valor1;
    var v2 = valor2;

    if(valor2>valor1){
        aux = valor1;
        valor1 = valor2;
        valor2 = aux;
    }
    
    if(valor1<0 || valor2<0){
        document.getElementById("resultado").innerHTML= "Número negativo.";
    }else{
        var resto = 1;
        var mdc = 0;
        while(resto !==0){
            resto = valor1%valor2;
        if(resto === 0){
            mdc = valor2;
        }
            valor1 = valor2;
            valor2 = resto;    
        }

        document.getElementById("resultado").innerHTML = "O MDC entre "+v1+" e "+v2+" é: "+ mdc+".";
    }
    console.log(mdc);
    
}

