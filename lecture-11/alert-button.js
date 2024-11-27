class AlertButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            let message = this.getAttribute('message');
            alert(message);
        });
    }
}

customElements.define('alert-button', AlertButton, { extends: 'button' });
