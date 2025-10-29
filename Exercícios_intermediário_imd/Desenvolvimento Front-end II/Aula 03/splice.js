const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3'];

mensagens.splice(1, 1);
console.log(mensagens); // [ 'Mensagem 1', 'Mensagem 3' ]

mensagens.splice(1, 0,'Nova Mensagem');
console.log(mensagens); // [ 'Mensagem 1', 'Nova Mensagem', 'Mensagem 3' ]

mensagens.splice(2, 1, 'Nova Mensagem 3');
console.log(mensagens); // [ 'Mensagem 1', 'Nova Mensagem', 'Nova Mensagem 3' ]