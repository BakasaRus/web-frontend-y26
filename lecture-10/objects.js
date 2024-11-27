'use strict';

let user = {
    firstName: '',
    lastName: '',
    email: 'nvandreev@itmo.ru',

    // !!!
    anotherGreet: () => { console.log(`Hello ${this.lastName}!`) },

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

user.password = 'hgcjvblk;';
user['isu'] = 224857;
user.name = 'Nikolai Andreev';

console.log(user);
user.greet();
user.anotherGreet();

const admin = {
    name: 'Ivan Ivanov',
    email: 'ivan@itmo.ru',
    password: 'tesdrchbjkml,',
};

Object.defineProperty(admin, 'password', { 
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.freeze(admin);

admin.name = 'Test';
admin.password = '12345678';

delete admin.password;

console.log(admin);

console.log(user.isuNumber?.info);
// console.log(user.isuNumber.info);

let name = 'Roman Makarevich';
let github = 'xrem';

let roma = {
    name,
    github,
}

console.log(roma);
