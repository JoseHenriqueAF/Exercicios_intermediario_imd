System.register(["../models/livro", "../models/livros", "../views/livrosview"], function (exports_1, context_1) {
    "use strict";
    var livro_1, livros_1, livrosview_1, LivroController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livro_1_1) {
                livro_1 = livro_1_1;
            },
            function (livros_1_1) {
                livros_1 = livros_1_1;
            },
            function (livrosview_1_1) {
                livrosview_1 = livrosview_1_1;
            }
        ],
        execute: function () {
            LivroController = class LivroController {
                constructor() {
                    this._inputTitulo = document.querySelector('#titulo');
                    this._inputAutor = document.querySelector('#autor');
                    this._inputEditora = document.querySelector('#editora');
                    this._inputAno = document.querySelector('#ano');
                    this._livros = new livros_1.Livros;
                    this._livrosView = new livrosview_1.LivrosView('#livrosview');
                    this._livrosView.update(this._livros);
                }
                cadastrar(event) {
                    event.preventDefault();
                    let livro = new livro_1.Livro(this._inputTitulo.value, this._inputAutor.value, this._inputEditora.value, parseInt(this._inputAno.value));
                    //console.log(livro);
                    this._livros.adicionar(livro);
                    //this._livros.exibirLivros().forEach(livro=> console.log(livro));
                    this._livrosView.update(this._livros);
                }
            };
            exports_1("LivroController", LivroController);
        }
    };
});
