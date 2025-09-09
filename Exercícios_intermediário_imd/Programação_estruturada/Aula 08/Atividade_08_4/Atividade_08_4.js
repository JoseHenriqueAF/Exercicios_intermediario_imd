function fds() {
    var data = new Date(document.getElementById("data").value);
    var saida = (data.getDay() == 6) || (data.getDay() == 5);
    document.getElementById("saida").innerHTML = saida;
}
