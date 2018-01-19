const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'Dmitry'
};

const newPerson = {
    ...person,
    age: 21
};

console.log(newPerson);

const filter = (...args) => {
    return args.filter((el) => {
        return el === 1;
    });
};

console.log(filter(1, 2, 3));