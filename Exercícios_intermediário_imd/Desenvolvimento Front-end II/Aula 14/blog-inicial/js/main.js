const apiUrl = "https://autoria-form.vercel.app/api";

function consultarPostsComJQuery(indiceInicio, quantidade) {
    $.getJSON(apiUrl + "/blog", (dados) => carregarResumoPostComJQuery(dados, indiceInicio, quantidade));
}

consultarPostsComJQuery(0, 5);

function carregarResumoPostComJQuery(postObject, indiceInicio, quantidade) {

    // Reduzir o corpo em 300 caracteres (resumo)
    postObject.map(post => post.corpo = post.corpo.slice(0, 300));

    postObject.reverse();

    for (let i = indiceInicio; i < quantidade + indiceInicio; i++) {

        var post = postObject[i];

        var mainDiv = $("<div>");
        mainDiv.addClass("card mb-4");

        var imgElement = $("<img>");
        imgElement.addClass("card-img-top");
        imgElement.attr("src", apiUrl + post["imagem"]);

        var bodyDiv = $("<div>");
        bodyDiv.addClass("card-body");

        var bodyHeader = $("<h2>");
        bodyHeader.addClass("card-title");
        bodyHeader.text(post.titulo);

        var bodyParagraph = $("<p>");
        bodyParagraph.addClass("card-text");
        bodyParagraph.text(post.corpo + " ...");

        var bodyLink = $("<a>");
        bodyLink.addClass("btn btn-primary");
        bodyLink.html("Leia Mais →");
        bodyLink.attr("href", "post.html?id=" + post.id);

        bodyDiv.append(bodyHeader);
        bodyDiv.append(bodyParagraph);
        bodyDiv.append(bodyLink);

        var footerDiv = $("<div>");
        footerDiv.addClass("card-footer text-muted");
        var dataPublicacao = new Date(post.dataPublicacao);
        const ptBRFormatter = new Intl.DateTimeFormat("pt-BR");
        footerDiv.text("Postado em " + ptBRFormatter.format(dataPublicacao));

        mainDiv.append(imgElement);
        mainDiv.append(bodyDiv);
        mainDiv.append(footerDiv);

        var blogEntries = $("#blogEntries");
        blogEntries.append(mainDiv);
    }
    indicePost += quantidade;
}