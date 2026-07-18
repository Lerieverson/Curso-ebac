const divisao = function(dividendo, divisor){
  if(divisor == 0)
    return "Não é possível dividir por zero";
  if(divisor == 1)
    return dividendo;
  return dividendo / divisor;
}

console.log(divisao(42,0)); // Não é possível dividir por zero
console.log(divisao(42,1)); // 42
console.log(divisao(42,2)); // 21


//funcão anonima automaticamente invocada
(function(){
  console.log('Função anônima auto-invocada');
})();