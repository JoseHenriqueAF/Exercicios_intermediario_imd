const cidade = ['Natal', 'Fortaleza','Recife'];
cidade.push('Trabalhar com Ti','relaxar')

cidade.unshift("Primeiro","Segundo");

let primeiro = cidade.unshift();

console.log("1°: "+primeiro+"\n"+cidade);
