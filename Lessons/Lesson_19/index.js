let a = 'A'
let b = a // b is a copy , indepently the change in a b will be the same.

a = 'Another thing'

console.log(a,b)

let c = [1,2,3]
let d = c // Arrays are mutable , this way d also will be changed

c.push(4)

console.log(c,d)

//This way the value of f will be independent:
let e = [1,2,3]
let f = [...e]

e.push(4)

console.log(`This is f: ${f}`)