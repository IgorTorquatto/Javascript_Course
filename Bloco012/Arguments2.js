//Fazer o somatório dos argumentos passados em uma função.

function somatorio() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total);
}

somatorio(1, 2, 3, 4, 5)