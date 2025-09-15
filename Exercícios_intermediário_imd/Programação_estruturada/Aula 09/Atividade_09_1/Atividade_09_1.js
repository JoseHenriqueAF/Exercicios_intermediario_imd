function analisar() {
    var valor1 = Number(document.getElementById("valor1").value);
    var valor2 = Number(document.getElementById("valor2").value);
    var valor3 = Number(document.getElementById("valor3").value);
    
    var maximo = Math.max(valor1,valor2,valor3);
    var soma = valor1+valor2+valor3;
    var saida = "Valor máximo = "+ maximo +" e a soma dos valores ("+soma+") é "+parOuImpar(soma);
    document.getElementById("saida").innerHTML = saida;
}

function parOuImpar(num){
    if (num%2 === 0){
        return "Par";
    } else {
        return "Ímpar";
    }
}
