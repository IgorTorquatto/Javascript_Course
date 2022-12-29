const names = ['Luiz','Otávio','Miranda']

for (let i = 0; i <names.length; i++){
    console.log(names[i]);
}

console.log('###');

for (let i in names){
    console.log(names[i]);
}

console.log('###');

for (let value of names){
    console.log(value);
}
console.log('###');

names.forEach( function (element, index, array) {
    console.log(element , index, array);
})