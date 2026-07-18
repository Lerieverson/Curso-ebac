//push(): adiciona um elemento no final do array
frutas.push("manga");
console.log(frutas); //["maçã", "pera", "laranja", "uva", "abacaxi", "manga"]

//pop(): remove e retorna o último elemento do array
const ultimoElemento = frutas.pop();
console.log(ultimoElemento); //manga

//shift(): remove e retorna o primeiro elemento do array
const primeiroElemento = frutas.shift();
console.log(primeiroElemento); //maçã 

//unshift(): adiciona um elemento no início do array
frutas.unshift("morango");
console.log(frutas); //["morango", "pera", "laranja", "uva", "abacaxi"] 