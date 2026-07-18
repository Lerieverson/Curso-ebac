//cria função dividir:
function divisao(dividendo, divisor){
  if(divisor == 0)
    return "Não é possível dividir por zero";

  if(divisor == 1)
    return dividendo;

  return dividendo / divisor;
}

//invocar a função:
console.log(divisao(42,0)); // Não é possível dividir por zero
console.log(divisao(42,1)); // 42
console.log(divisao(42,2)); // 21