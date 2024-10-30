console.log('Hello World!');

console.log(typeof true); // boolean
console.log(typeof "Hello");
console.log(typeof 88);
console.log(typeof 3.14);
console.log(typeof BigInt('8964513864845168796514120124'));
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol('Unique value'));

{
    var test = 52;
    let anotherTest = 78;
    const PI = 3.14;
}

console.log(test);
// console.log(anotherTest);
// console.log(PI);    

let info = {
    name: 'Nick',
    age: 26,
};

console.log(info);

let numbers = [8, 74, 'hello', false];
numbers[50] = 'wow!';
console.log(numbers);

let demo = {
    true: 78,
    false: 89,
};

console.log(demo);

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5 ** 3);

let a = 5;
let b = 9;

if (a < b) {
    console.log('Less than');
} else {
    console.log('Greater than or equal');
}

switch (a) {
    case 5:
        console.log('5');
        break;

    default:
        console.log('Default');
        break;
}

for (const key in info) {
    console.log(key, info[key]);
}

for (const value of numbers) {
    console.log(value);
}

try {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function( result ) {
            console.log(result);
        }
    });
} catch (error) {
    console.log(error);
} finally {
    console.log('Finally here!');
}

function add(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}

const power = (a, b) => a ** b;
const power2 = (b) => power(2, b);

console.log(add(5, 9));
console.log(multiply(5, 9));
console.log(power(5, 9));
console.log(power2(8));
