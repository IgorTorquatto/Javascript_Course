let num1 = 1
let num2 = 2.5
let num3 = 10.67887678

//toString:
console.log(num1.toString() + num2)

//toFixed: (Arredondar para o número de casas decimais definida.)
console.log(num3.toFixed(2))

//isInteger: (Retorna true or false , para checar números inteiros)
console.log(Number.isInteger(num3))

//isNaN : (Também retorna true or false se o valor checado é not a number)
let test = num1 * 'Hello'
console.log(Number.isNaN(test))
