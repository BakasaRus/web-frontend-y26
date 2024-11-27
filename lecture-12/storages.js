'use strict';

// cookieStore.set('hello', 'world');
console.log(document.cookie);

localStorage.setItem('xrem', 'Roman');
console.log(localStorage.getItem('bakasa'));

console.log(localStorage);

for (const key in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
        const element = localStorage[key];
        console.log(key, element);
    }
}

let data = {
    name: 'Nikolai Andreev',
    email: 'nvandreev@itmo.ru',
};

localStorage.setItem('bakasa', JSON.stringify(data));

window.addEventListener('storage', (event) => {
    console.log(event);
    console.log(`${event.key} was changed from ${event.oldValue} to ${event.newValue}`);
});
