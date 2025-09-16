function primos() {
    var num = 0;
    do {
        num = Number(prompt("Escolha um número maior que 1:"));
    } while (num <= 1 || isNaN(num));

    var resposta = "Os primos entre 2 e " + num + " são: ";
    var primosEncontrados = [];

    // O loop deve começar em 2, pois é o primeiro número primo
    for (i = 2; i <= num; i++) {
        var divisores = 0;
        for (j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisores++;
            }
        }
        if (divisores === 2) {
            primosEncontrados.push(i);
        }
    }

    var primosString = primosEncontrados.join(", ");
    

    if (primosString.length > 0) {
        primosString += ".";
    }

    resposta += primosString;
    document.getElementById("resultado").innerHTML = resposta;
}   




