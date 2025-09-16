function media() {
    var soma = 0;
    var divisoes = 0;
    var numero;
    do{
        
        numero = Number(prompt("Digite um número?"));
        if((numero !== 0)&&!isNaN(numero)){    
            soma = soma + numero;
            divisoes++;
        }
    } while((numero !== 0)&&!isNaN(numero) );
    var media = soma/divisoes;

    
    console.log("Media "+ media);
    console.log("Divisões "+ divisoes);
    console.log("Soma "+soma);

    if (divisoes ===0){
        document.getElementById("resultado").innerHTML = "Não foi inserido nenhum valor";
    } else {
        document.getElementById("resultado").innerHTML = "A média foi de "+ media + ".";
    }

}

