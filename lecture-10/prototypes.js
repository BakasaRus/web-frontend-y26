function User(name, email) {
    // this = {};
    this.name = name;
    this.email = email;
    this.greet = function () {
        console.log(`Hello ${this.name}!`);
    }
    // return this;
}

User.prototype = {
    constructor: User,
    password: '12345678',
}

let me = new User('Nikolai Andreev', 'nvandreev@itmo.ru');

console.log(me);
me.greet();

let user = {
    name: 'Roma',
    github: 'xrem',
};

user.__proto__ = {
    password: '12345678',
    greet() {
        console.log(`Hello ${this.name}!`);
    }
};

console.log(user);
user.greet();

for (const key in user) {
    console.log(key);
}

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(key);
    }
}

String.prototype.firstLetter = function() {
    return this[0];
};

console.log('Hello World!'.firstLetter());

let course = Object.create({
    name: 'Web: Frontend',
});

console.log(course);

