var original = [];

function inserir() {
    var num = Number(document.getElementById("entrada").value);
    original.push(num);
    document.getElementById("resultado").innerHTML= imprimir();
}

function imprimir() {
    var texto = "Array original é = ["+original+"] <br>";
    return texto;
}
