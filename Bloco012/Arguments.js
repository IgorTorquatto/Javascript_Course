function funcao() {
    console.log(arguments);
}

funcao('Valor', 1, 2, 3, 4)

//Note que a funcao() não tem parâmetros.
// O arguments captura todos os argumentos passados para a função e os coloca em formato de objeto.
//Não funciona em arrow functions

function funcao_argumento1() {
    console.log(arguments[0]);
}

funcao_argumento1('Quero esse', 'outro')