'use strict';

function addTwo(a, b) {
    console.log('This from function: ', this);
    let helper = () => { console.log('This from arrow in function:', this) }
    helper();
    return a + b;
}

let user = {
    firstName: '',
    lastName: '',
    email: 'nvandreev@itmo.ru',

    // !!!
    anotherGreet: () => {
        console.log(`Hello ${this.lastName}!`);
        console.log('This from arrow in object:', this);
    },

    thirdGreet: function() {
        console.log(`Hello ${this.name}!`);
    },

    greet() {
        console.log(`Hello ${this.firstName}!`);
    },

    set name(value) {
        const data = value.split(' ', 2);
        this.firstName = data[0];
        this.lastName = data[1];
    },

    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
}

console.log('This from global: ', this);

user.name = 'Nikolai Andreev';

console.log(user);
user.greet();
user.anotherGreet();
user.thirdGreet();

console.log(addTwo(3, 7));

let addTwoWithContext = addTwo.bind({ x: 4, y: 9 });
console.log(addTwoWithContext(7, 1));

console.log(addTwo.call({ i: 8, j: 15 }, 7, 6));

let arrowFunc = () => { console.log('This from arrow:', this) }
arrowFunc();

main.addEventListener('click', function() {
    console.log('This from event handler:', this);
});
