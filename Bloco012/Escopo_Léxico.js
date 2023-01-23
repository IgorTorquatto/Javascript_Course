// Diferença de escopo global e escopo de função:
//Escopo Global
const nome = 'Luiz'

function falaNome(){
    console.log(nome);
}

falaNome()

//Escopo de Função:
function usaFalaNome(){
    const nome = 'Otávio' // Não está sendo usado
    falaNome()
}

usaFalaNome()