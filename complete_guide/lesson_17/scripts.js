const numbers = [1, 2, 3];

[num1, , num3] = numbers;
console.log(num1, num3);

const object = {
    name: 'Dmitry',
    age: 26
};

const {name, age} = object;
console.log(name, age);