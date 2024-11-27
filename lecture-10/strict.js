// 'use strict';

greeting = 'Hello World!';
console.log(greeting);

NaN = 987;
console.log(NaN);

delete NaN;

function sumOfThree(a, a, c) {
    return a + a + c;
}

console.log(sumOfThree(1, 2, 3));

let user = {
    name: 'Nikolai Andreev',
    email: 'me@bakasa.dev',
    email: 'nvandreev@itmo.ru',
};

console.log(user);

let numbers = [
    [174, 789, 106],
    [010, 749, 641],
    [910, 014, 557],
];

console.log(numbers);

let test = 'Hello';
test.greeting = 'Hi!';

console.log(test);
