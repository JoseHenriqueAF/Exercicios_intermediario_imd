namespace StringUtils{
    let tamanhoMaximo = 10;
    
    export function maiuscula(texto: string):string{
        return texto.toLocaleUpperCase();
    }

    export function minuscula(texto: string):string{
        return texto.toLowerCase();
    }

    export function validaTexto(texto: string):boolean{
        return texto.length<= tamanhoMaximo;
    }
}