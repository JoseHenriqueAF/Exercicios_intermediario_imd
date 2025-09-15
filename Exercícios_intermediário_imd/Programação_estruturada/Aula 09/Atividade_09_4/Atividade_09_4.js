function recomendar() {
    var nota = Number(document.getElementById("nota").value);
    var saida;

    switch(nota){
        case 0:
        case 1:
        case 2:
            var saida = "Você precisa melhorar muito!";
            break; 
        case 3:
        case 4:
            var saida = "Você está quase conseguindo!";
            break;
        case 5:
        case 6:
            var saida = "Você conseguiu mas poderia ser melhor!";
            break;
        case 7:
        case 8:
        case 9:
            var saida = "Você conseguiu!";
            break;
        case 10:
            var saida = "Você conseguiu a perfeição!"
            break;
        default:
            var saida = "Não existe essa nota";     
    }

    document.getElementById("saida").innerHTML = saida;
}
