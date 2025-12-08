// import { Livro } from "./models/livro";

import { LivroController } from "./controllers/livrocontroller";

// let livro = new Livro("Meu livro","emerson","ufrn",2021);
// console.log(livro);



let controller = new LivroController();

document.querySelector('.form').addEventListener('submit',controller.cadastrar.bind(controller));