let numeros = [12, 19, 7, 33, 91, 77, 3, 11];
let todosMaioresQueTrinta = numeros.every(n => {return n > 30});
console.log('Todos os números são maiores que 30? ' + todosMaioresQueTrinta); // false

let numeros1 = [12, 19, 7, 33, 91, 77, 3, 11];
let algumMaiorQueTrinta = numeros1.some(n => {return n > 30});
console.log('Tem algum número maior que 30? ' + algumMaiorQueTrinta); // true