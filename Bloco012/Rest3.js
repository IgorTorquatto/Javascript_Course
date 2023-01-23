//Usando o rest operator para capturar os argumentos.
const conta = (...args) =>{
    console.log(args)
}

conta('+',2,3)