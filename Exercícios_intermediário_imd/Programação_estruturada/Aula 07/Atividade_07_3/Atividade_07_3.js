function proteger() {
    var emailFornecido = document.getElementById("email").value;
    var fim = emailFornecido.indexOf("@");
    var antesDoArroba = emailFornecido.slice(0,fim);
    var metadeDoNome = Math.ceil(fim/2);
    var metadeDepoisDaMetade = antesDoArroba.slice(metadeDoNome);
    var emailProtegido = emailFornecido.replace(metadeDepoisDaMetade,"...");

    console.log(emailProtegido);
    document.getElementById("saida").innerHTML = emailProtegido;
}
