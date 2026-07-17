/*1- Elaborar um programa para um cinema, onde o Usuário possa digitar o titulo e a duração
de um filme em MediaElementAudioSourceNode. Exiba o título do filme e converta a
 duração para horas e minutos;

 1. obter o nome do filme
 2. obter á duração em minutos
 3. converter á duração de minutos em horas
   3.1 fazer á divisão da duração em minutos por 60 pra pegar a quantidade em horas
   3.2 arredondar a quantidade de horas para pegar a hora cheia 
   3.3 pegar o resultado da duração em minutos e remover as horas cheias (horas * 60)
   exemplo: 70 minutos (1h e 10min)
   60 minutos = 1h
   10 minutos
   70 / 60 = 1,16 (arredondar pra baixo)=1
   horas = 1
   const minutos = 70 - 1 * 60 = 10
  4. exibir o nome do filme
  5. exibir a duração em horas e minutos
 */
function algoritmo(){
  const titulo = document.getElementById('titulo').value;
  const duracao = document.getElementById('duracao').value;

  const horas = Math.floor(duracao / 60);
  const minutos = duracao - horas * 60;

  document.getElementById('tituloSaida').textContent = titulo.toUpperCase();
  document.getElementById('duracaoSaida').textContent =
    horas + 'horas(s) e ' + minutos + 'minutos';
}