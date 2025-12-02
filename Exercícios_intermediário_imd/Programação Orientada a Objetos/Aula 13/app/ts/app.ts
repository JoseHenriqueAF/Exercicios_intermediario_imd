/// reference path = "StringUtils.ts" />


//let mensagem = "oi";

namespace Texto{
    export function imprimir(texto: string){
        console.log(texto);
    }

    export function contarTexto(texto: string): number{
        return texto.length;
    }
}

// Texto.imprimir("Emerson");
// console.log(Texto.contarTexto("Emerson"));

// console.log(StringUtils.maiuscula("ufrn"));
// console.log(StringUtils.minuscula("EMERSON"));
// console.log(StringUtils.validaTexto("Typescriptpioo"));

//--------------------Módulos---------------------------------

//import { mensagem, teste } from "./exemplo";
import * as ex from "./exemplo";

// console.log(ex.mensagem);

// ex.teste();

//Class

import Empregado from './funcionario';

let F = new Empregado("Jose");

F.imprimirNome();