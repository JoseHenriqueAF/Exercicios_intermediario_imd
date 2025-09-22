var array = [];

function inserir() {
    var num = Number(document.getElementById("entrada").value);
    array.push(num);
    imprimir();
}

function remover() {
    var num = Number(document.getElementById("num_removido").value);
    for(i=0; i< array.length;){
        if(array[i]=== num){
            array.splice(i,1)
        } else {
            i++;
        }
    }
    imprimir();
}

function imprimir() {
    var texto = "O array atual é ["+array+"]";
    document.getElementById("resultado").innerHTML = texto;
}