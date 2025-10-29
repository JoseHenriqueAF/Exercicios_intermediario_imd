const palavras = ['universidade', 'web', 'javascript', 'disciplina', 'aluno', 'nota'];
const resultado = palavras.filter(palavra => palavra.length > 6);
console.log(resultado); // [ 'universidade', 'javascript', 'disciplina' ]