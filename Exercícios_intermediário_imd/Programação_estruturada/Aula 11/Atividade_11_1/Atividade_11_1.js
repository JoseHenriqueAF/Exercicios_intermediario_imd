function mes() {
    var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
    var agora = new Date();
    var saida = meses[agora.getMonth()];
    document.getElementById("resultado").innerHTML = "O mês atual é "+saida;
}
