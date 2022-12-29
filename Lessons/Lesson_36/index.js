const fruits = ['Apple','Pear','Grape']
const person = {
    name: 'Igor',
    surname: 'Torquato',
    age: 30
}

for ( let index in fruits){
    console.log(index);
}  //For type 2  

for ( let object in person){
    console.log(object);
}

console.log(person['name']); // One type to acessing the object value


