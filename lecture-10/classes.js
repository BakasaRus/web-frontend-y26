class User {
    #firstName;
    #lastName;

    constructor(firstName, lastName, email) {
        // this = {};
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.email = email;
    }

    get name() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    greet() {
        console.log(`Hello ${this.name}!`);
    }
}

class Admin extends User {
    constructor(firstName, lastName, email, rights) {
        super(firstName, lastName, email);
        this.rights = rights;
    }

    static get availableRights() {
        return ['full', 'read', 'triage', 'none'];
    }
}

let me = new User('Nikolai', 'Andreev', 'me@bakasa.dev');

console.log(me);
me.greet();

for (const key in me) {
    console.log(key);
}

let admin = new Admin('Alexander', 'M', 'admin@itmo.ru', 'full');
console.log(admin);
admin.greet();

console.log(Admin.availableRights);
