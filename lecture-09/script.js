let paragraph = document.querySelector('#interesting_section p');
if (paragraph !== null) {
    paragraph.innerText = 'Replaced paragraph';
}

let footerContent = document.createElement('p');
footerContent.innerHTML = `&copy; 2007 - ${new Date().getFullYear()}`;
let footer = document.querySelector('body > footer');
footer.appendChild(footerContent);

let secondSection = document.querySelectorAll('main > section')[1];
secondSection.insertBefore(footerContent, secondSection.children[2]);
secondSection.removeChild(secondSection.children[3]);

secondSection.setAttribute('style', 'background-color: red;');
console.log(secondSection.getAttribute('style'));
secondSection.style.display = 'flex';

console.log(secondSection.style);

document.addEventListener('DOMContentLoaded', (event) => {
    console.log(event);
    console.log('Loaded');
});

secondSection.addEventListener('mouseenter', (event) => {
    // alert('Warning!');
    // let result = prompt('Your reason to move to this section:');
    // if (confirm('Are you sure?')) {
    //     console.log(result);
    // }
    console.log(event);
});

function handleForm(event) {
    event.preventDefault();

    let title = document.querySelector('#form input[type="text"]');
    let color = document.querySelector('#form input[type="color"]');

    document.querySelector('h1').innerText = title.value;
    secondSection.style.backgroundColor = color.value;

    form.reset();

    console.log(event);
}

form.addEventListener('submit', handleForm);
