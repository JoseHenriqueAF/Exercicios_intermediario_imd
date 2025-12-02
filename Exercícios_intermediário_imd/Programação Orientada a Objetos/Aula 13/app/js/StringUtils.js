var StringUtils;
(function (StringUtils) {
    var tamanhoMaximo = 10;
    function maiuscula(texto) {
        return texto.toLocaleUpperCase();
    }
    StringUtils.maiuscula = maiuscula;
    function minuscula(texto) {
        return texto.toLowerCase();
    }
    StringUtils.minuscula = minuscula;
    function validaTexto(texto) {
        return texto.length <= tamanhoMaximo;
    }
    StringUtils.validaTexto = validaTexto;
})(StringUtils || (StringUtils = {}));
