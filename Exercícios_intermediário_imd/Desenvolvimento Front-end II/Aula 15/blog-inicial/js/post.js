const apiUrl = "https://autoria-form.herokuapp.com";
const postId = new URLSearchParams(window.location.search).get('id');

function requisitarPost(id) {
    $.getJSON(apiUrl + "/post/" + postId, (dados) => carregarPostNaPaginaComJQuery(dados));
}

function carregarPostNaPaginaComJQuery(dados) {

    // Título do post
    $("#postTitulo").text(dados.titulo);
    $("#postSubTitulo").text(dados.titulo);

    // Imagem do post
    $("#postImagem").attr("src", apiUrl+dados.imagem);

    // Data da publicação
    var dataPublicacao = new Date(dados.dataPublicacao);
    const ptBRFormatter = new Intl.DateTimeFormat("pt-BR");
    $("#postDataDePublicacao").text("Postado em " + ptBRFormatter.format(dataPublicacao));

    // Conteúdo do post    
    let paragrafos = dados.corpo.split("\n\n");
    paragrafos.forEach(paragrafo => {
        $("#postConteudo").append("<p>"+paragrafo+"</p>");
    });

}

$(document).ready(function () {
    requisitarPost(postId);
});