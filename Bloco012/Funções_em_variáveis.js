const souUmDado = function (){
    console.log('Sou um dado');  //função dentro de uma variável
}

function executaFuncao (funcao){
    funcao() // função que executa funções dada nos parâmetros
}

executaFuncao(souUmDado) // executando a variável que tem uma função