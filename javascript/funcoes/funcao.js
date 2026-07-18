function minhaFuncao(){
  console.log("Olá, mundo!");
}
minhaFuncao(); //chamada da função

function saudacao(nome){
  console.log("Olá, " + nome + "!");
}
saudacao("Alice"); // Olá, Alice!
//cria a função:
function saudacaoComRetorno(nome){
  return `Olá, ${nome}!`;
}
//pega o retorno / invoca a função
const mensagem = saudacaoComRetorno("Alice"); // Olá, Alice!
alert(mensagem); // Exibe a mensagem em um alerta

//cria função:
function koe(nome){
  return `olá ${nome}!`;
}
alert(koe("Alice")); // Exibe a mensagem em um alerta

