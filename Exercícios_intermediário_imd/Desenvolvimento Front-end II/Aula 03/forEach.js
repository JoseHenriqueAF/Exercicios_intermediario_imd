const array = ['João', 'Maria', 'Daniel', 'Alice'];

//  array.forEach((elemento, indice) => { array[indice] = elemento.toUpperCase(); });

//console.log(array);  // [ 'JOÃO', 'MARIA', 'DANIEL', 'ALICE' ]

array.forEach(function(nome,posicao){
    console.log(posicao + ":"+ nome+".");
})