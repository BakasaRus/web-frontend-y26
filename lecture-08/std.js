let data = [1, 3, 6];

console.log(Array.isArray(data));
console.log(Date.parse('2024/10/23 12:34:00+0300'));
console.log(Math.max(5, 9, 77));
console.log(RegExp(/d+/).test('68d4g6sd4fgd6f54g6sd5f4g6sdf4g'));

console.error('ERROR!');
console.warn('Warning!');
console.info('Some info');

users = [
    { name: 'Nick', age: 26 },
    { name: 'Vasya', age: 30 },
    { info: 'some info' },
]

console.table(users);

window.addEventListener('load', (event) => {
    console.log(event);
});

const eventHandler = (event) => {
    console.log('no event');
};

window.addEventListener('load', eventHandler);
window.removeEventListener('load', eventHandler, false);

console.log('Results: ', document.querySelectorAll('section > h2'));
console.log(document.location.href);

// console.log(history.go(-1));
