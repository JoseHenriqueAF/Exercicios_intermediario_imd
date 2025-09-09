function diasNoMes() {
    var mes = Number(document.getElementById("mes").value);
    //mes--;
    //console.log(mes);
    var hoje = new Date();
    var ano = hoje.getFullYear();

    var qtd_dias = new Date(ano, mes, 0).getDate();

    var saida = "O mês é " + mes + " do ano " + ano + " tem " + qtd_dias + " dias.";

    document.getElementById("saida").innerHTML = saida;
    console.log(qtd_dias);  
}
