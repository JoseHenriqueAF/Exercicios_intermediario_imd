function idade() {
   var hoje = new Date();

   var dataNascimento = new Date(document.getElementById("data").value);
   
   var idadeMilisegundos = hoje.getTime()-dataNascimento.getTime();

   var idade = new Date(idadeMilisegundos); 

   var anosdeIdade = Math.abs(idade.getUTCFullYear() - 1970);

   var saida = "Você tem "+ anosdeIdade + " anos de idade.";


   document.getElementById("saida").innerHTML = saida;

}
