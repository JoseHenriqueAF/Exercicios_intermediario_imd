var original = [];
var clone = [];

function inserir() {
    var num = Number(document.getElementById("entrada").value);
    original.push(num);
    document.getElementById("resultado").innerHTML = imprimir();
}

function clonar() {
    clone = original.slice(0);
    document.getElementById("resultado").innerHTML = imprimir();
    //console.log(original === clone);
}

function imprimir() {
    var texto = "Array original é = ["+original+"] <br>";
    texto = texto + "Array clone é = ["+clone+"] <br>";
    return texto;
}

