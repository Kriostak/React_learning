const number = 1;
const numbe2 = number;

number2 = 2;
console.log(number, number2);

const person = {
    name: 'Jake'
};
const personTwo = person;

personTwo.name = 'Fin';

console.log(person.name, personTwo.name); // same for array

const animal = {
    type: 'Dog'
};

const anotherAnimal = {
    ...animal
};

anotherAnimal.type = 'Cat';

console.log(animal.type, anotherAnimal.type); // clone object