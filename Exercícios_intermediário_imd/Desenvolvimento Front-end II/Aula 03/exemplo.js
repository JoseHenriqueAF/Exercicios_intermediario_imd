const precos = [7.50, 32.00, 12.50, 27.50, 16.50, 9.90];

const maiorPrecoReajustado = precos
                            .filter((produto) => { return produto > 15.00 })
                            .map((produto) => { return produto - 0.1*produto })
                            .reduce((a, b) => { return Math.max(a, b) } );                            

console.log(maiorPrecoReajustado); // 28.8