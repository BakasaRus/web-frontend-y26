'use strict';

setTimeout(() => {
    console.log('From timeout');
    Promise.resolve().then(() => {
        console.log('From Promise inside timeout');
    });
}, 0);

setTimeout(() => {
    console.log('From timeout 2');
}, 0);

console.log('From sync code');

Promise.resolve().then(() => {
    console.log('From Promise 1');
});

Promise.resolve().then(() => {
    console.log('From Promise 2');
});
