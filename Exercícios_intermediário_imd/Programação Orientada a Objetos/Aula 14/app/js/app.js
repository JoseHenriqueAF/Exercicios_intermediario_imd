System.register(["./models/livro"], function (exports_1, context_1) {
    "use strict";
    var livro_1, livro;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livro_1_1) {
                livro_1 = livro_1_1;
            }
        ],
        execute: function () {
            livro = new livro_1.Livro("Meu livro", "emerson", "ufrn", 2021);
            console.log(livro);
        }
    };
});
