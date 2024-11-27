'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log(event);
    console.log('Log from event listener');
    nickname.addEventListener('keypress', (event) => {
        setTimeout(() => {
            console.log(event);
        }, 1000);
        alert('Hello World!');
    });
});

console.log('Log after event listener');

function sum(a, b, callback) {
    let s = a + b;
    console.log('End of sum function');
    callback(s);
}

sum(5, 8, (result) => {
    console.log(result);
});

let timer1 = setTimeout((x) => {
    console.log('Hello from setTimeout');
    console.log(x);
}, 5000, 52);

console.log(timer1);

clearTimeout(timer1);

let timer2 = setInterval(() => {
    console.log('Hello from setInterval');
}, 1000);

setTimeout(() => {
    console.log('Removing timer', timer2);
    clearInterval(timer2);
}, 5000);

async function getBTC() {
    try {
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        // let response = fetch('https://ya.ru');
        console.log(response);
    
        console.log('Got response');
        let data = await response.json();

        console.log('Got parsed response body');
        console.log(data);

        return data.bpi.USD.rate_float;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Some actions...');
    }
}

getBTC()
.then(price => console.log('BTC price', price))
.finally(() => console.log('Some other actions...'));

console.log('Hello world!');

let promise = new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.5 ? resolve('Success') : reject('Error!'), 1000);
});

promise
    .then(data => console.log(data))
    .catch(error => console.error(error));

let p1 = getBTC();
let p2 = getBTC();

Promise.allSettled([p1, p2])
.then(data => console.log(data))
.catch(error => console.error(error));
