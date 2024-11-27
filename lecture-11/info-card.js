class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render(title) {
        let markup = document.getElementById('card-template').content.cloneNode(true);
        markup.querySelector('h2').textContent = title;
        this.shadow.replaceChildren(markup);
    }

    static get observedAttributes() {
        return ['title'];
    }

    connectedCallback() {
        this.render(this.getAttribute('title'));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render(newValue);
    }
}

customElements.define('info-card', InfoCard);
