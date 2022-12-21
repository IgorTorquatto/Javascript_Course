let alumns = ['Luiz','Maria','João']

//Index's
console.log(alumns[0])

//Change:
alumns[0] = 'Eduardo'
console.log(alumns[0])

//Add:
alumns[3]= 'Luiza'
console.log(alumns[3])

//Length:
console.log(alumns.length)

//Push (Add end):
alumns.push('Carlo')

//Unshifht (Add firist):
alumns.unshift('Romão')

//Pop (Remove end):
let removed = alumns.pop()
//you can save the removed item in a variable.

//Shift (Remove first):
let removed_2 = alumns.shift()

//Delete ( Remove index):
delete alumns[1]
//turns the index removed undefined(empty)