function create_person (name,surname,age){ //factory function
    return {
        name: name,
        surname: surname,
        age: age
    };
}

const person1 = create_person('Paul','Scarpelli',21)
const person2 = create_person('Amurabi','Johson',33)
console.log(person1,person2)