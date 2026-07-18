
const matrizGastos = [
    ['alimentacao',  0 ],
    ['transporte', 0 ],
    ['lazer', 0 ],
    ['outros', 0 ]
];
    //Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
    //obter valor do formulário
const obterValorInformado = () => obterElemento('valor').value;
const obterCategoriaInformada = () => obterElemento('categoria').value;
    //obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

    //Atualizar valor da categoria
const atualizarValorCategoria = (categoria, valor) => 
    categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () =>{
    matrizGastos.forEach((item) => {
      const elemento = obterElemento(nome);
      elemento.textContent = `${nome}: R$ ${valor}`
    })
    }

  

  function adicionarGasto() {
      /*
    1.pegar o valor informado,
    2. pegar a categoria informada,
    3. impedir que o valor seja negativo,
    4. de acordo com a categoria, atualizar o valor.
    4.1. criar variaveis para controlar ou armazenar os valores de cada categoria,
    */
       const valorInformado = obterValorInformado();
       const categoriaInformada = obterCategoriaInformada();

       if(valorNegativo(valorInformado)){
          alert("Valor inválido. O valor não pode ser negativo");
          return;
       }
        const categoria = obterCategoria(matrizGastos, categoriaInformada);
        const total = obterCategoria(matrizGastos, "Total");

       atualizarValorCategoria(categoria, valorInformado);
       atualizarValorCategoria(total, valorInformado);
       atualizarInterface();
       limparCampos();
  }