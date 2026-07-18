//Funcoes das 4 operações matemáticas básicas
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => b > 0 ? a / b : "Não é possível dividir por zero";

//funcão de calculo:
const calculo = (operacao, a, b) => operacao(a, b);

//usando a função de calculo:
const resposta = calculo(soma, 10, 5);
console.log(resposta); // 15

const resposta2 = calculo(subtracao, 10, 5);
console.log(resposta2); // 5

const resposta3 = calculo(multiplicacao, 10, 5);
console.log(resposta3); // 50

const resposta4 = calculo(divisao, 10, 5);
console.log(resposta4); // 2

const resposta5 = calculo(divisao, 10, 0);
console.log(resposta5); // Não é possível dividir por zero