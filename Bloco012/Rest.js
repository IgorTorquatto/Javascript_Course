//Queremos fazer uma função que receba um operador, um acumulador e os numeros para podermos fazer os cálculos

function conta(operador, acumulador, numeros) {
    console.log(operador, acumulador, numeros);
}

conta('+', 0, [1, 2, 3, 4, 5])

//Nesse caso utilizamos array, porém podemos usar o rest.

function conta2(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
}

conta2('+', 0, 1, 2, 3, 4, 5)

//Todo o resto dos argumentos estará dentro de numeros da mesma forma.
//Rest operator sempre deve ser o último parâmetro.