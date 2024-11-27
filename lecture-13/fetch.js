let abort = new AbortController();

let response = fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
    method: 'GET',
    headers: {},
    credentials: 'same-origin',
    signal: abort.signal,
});

response.then(resp => {
    if (resp.ok) {
        console.log('success');
    }
    console.log(resp.status);
})
.catch(error => {
    console.error(error);
});

cancelBtn.addEventListener('click', () => {
    abort.abort('Cancelled by user');
})
