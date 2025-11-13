var texto = '{ "funcionarios" : [' +
    '{ "nome":"Peter" , "sobrenome":"Parker" },' +
    '{ "nome":"Tony" , "sobrenome":"Stark" },' +
    '{ "nome":"Steve" , "sobrenome":"Rogers" } ]}';

var objeto = JSON.parse(texto);

console.log(objeto['funcionarios'][0]['nome']);