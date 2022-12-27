const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av brasil',
        numero: 320
    }
}

const nome = pessoa.nome   //Normal Assignment
console.log(nome);

const { nome: n = ' ', sobrenome: s } = pessoa //Assignment via destructuring
console.log(n,s);  

// n = ' ' Standard Value

const {nome3, ...resto} = pessoa
console.log(resto)
