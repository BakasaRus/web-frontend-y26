let user = {
    name: 'Nikolai Andreev',
    email: 'nvandreev@itmo.ru',
};

let id = Symbol('id');
let anotherId = Symbol('id');

console.log(id == anotherId);

user[id] = 224857;
console.log(user);

for (const key in user) {
    const element = user[key];
    console.log(key, element);
}

const test1 = Symbol.for('id');
const test2 = Symbol.for('id');

console.log(test1 === test2);

let test = {
    in: 5,
    for: 9,
    let: 14,
    const: 9874,
};

console.log(test);
