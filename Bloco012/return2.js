function criaMultiplicador(multiplicador){
    function multiplicacao(n){
        return n * multiplicador
    }
    return multiplicacao
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica); //função multiplicacao
console.log(duplica(2));