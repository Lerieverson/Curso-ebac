if (nomInformado === nomeUsuario && senhaInformada === senhaCorreta) {
  console.log("login bem sucedido");
}else{
  console.log("Login inválido. Verique suas credenciais.");
}

//Retorna true se pelo menos uma das expressões for true.

const idade = 16;
const temCarteirinhaEstudante = true;
if (idade >= 18 || temCarteirinhaEstudante) {
  console.log("Você pode entrar no clube.");
} else {
  console.log("Você não pode entrar no clube.");
}

//NÃO (!) - Inverte o valor de uma expressão booleana.
const idade2 = 16;
if (!(idade2 >= 18)) {
  console.log("Você não pode entrar no clube.");
} else {
  console.log("Você pode entrar no clube.");
}