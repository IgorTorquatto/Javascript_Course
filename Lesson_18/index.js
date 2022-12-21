const personal ={
    name: 'Flávio',
    surname: 'Augusto',
    age: 25,

    increment(){
        this.age++ //reference to this object
    }
};

console.log(personal.age)
personal.increment()
console.log(personal.age)