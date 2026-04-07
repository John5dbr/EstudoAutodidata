
class Estrelas extends HTMLElement {
    constructor() {
        super();

        let miniDocument = this.attachShadow({ mode: "open" });

        let style = document.createElement('style');
        style.innerHTML = `
            :host {
                display: block;
            }

            div {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-evenly;
                gap: 10px;
                padding: 10px 10px;
                max-width: 225px;
        
                border: 2px solid black;
                border-radius: 5px;        
            }
            .estrelas {
                width: 30px;
                height: 30px;
            }
        `;

        let body = document.createElement('div');
        body.innerHTML = `
            <img class="estrelas" src="Recursos/pentagram.svg" id="umaEstrela">
            <img class="estrelas" src="Recursos/pentagram.svg" id="duasEstrela">
            <img class="estrelas" src="Recursos/pentagram.svg" id="tresEstrela">
            <img class="estrelas" src="Recursos/pentagram.svg" id="quatroEstrela">
            <img class="estrelas" src="Recursos/pentagram.svg" id="cincoEstrela">
        `;

        miniDocument.append(style);
        miniDocument.append(body);

    };

    connectedCallback() {
        let estrela = {
            estrela001: this.shadowRoot.getElementById('umaEstrela'),
            estrela002: this.shadowRoot.getElementById('duasEstrela'),
            estrela003: this.shadowRoot.getElementById('tresEstrela'),
            estrela004: this.shadowRoot.getElementById('quatroEstrela'),
            estrela005: this.shadowRoot.getElementById('cincoEstrela')
        };
        estrela.estrela001.addEventListener('click', () => {
            estrela.estrela001.src = "Recursos/star.svg"
            estrela.estrela002.src = "Recursos/pentagram.svg"
            estrela.estrela003.src = "Recursos/pentagram.svg"
            estrela.estrela004.src = "Recursos/pentagram.svg"
            estrela.estrela005.src = "Recursos/pentagram.svg"
        });
        estrela.estrela002.addEventListener('click', () => {
            estrela.estrela001.src = "Recursos/star.svg"
            estrela.estrela002.src = "Recursos/star.svg"
            estrela.estrela003.src = "Recursos/pentagram.svg"
            estrela.estrela004.src = "Recursos/pentagram.svg"
            estrela.estrela005.src = "Recursos/pentagram.svg"  
        });
        estrela.estrela003.addEventListener('click', () => {
            estrela.estrela001.src = "Recursos/star.svg"
            estrela.estrela002.src = "Recursos/star.svg"
            estrela.estrela003.src = "Recursos/star.svg"
            estrela.estrela004.src = "Recursos/pentagram.svg"
            estrela.estrela005.src = "Recursos/pentagram.svg"
        });
        estrela.estrela004.addEventListener('click', () => {
            estrela.estrela001.src = "Recursos/star.svg"
            estrela.estrela002.src = "Recursos/star.svg"
            estrela.estrela003.src = "Recursos/star.svg"
            estrela.estrela004.src = "Recursos/star.svg"
            estrela.estrela005.src = "Recursos/pentagram.svg"
        });
        estrela.estrela005.addEventListener('click', () => {
            estrela.estrela001.src = "Recursos/star.svg"
            estrela.estrela002.src = "Recursos/star.svg"
            estrela.estrela003.src = "Recursos/star.svg"
            estrela.estrela004.src = "Recursos/star.svg"
            estrela.estrela005.src = "Recursos/star.svg"
        });
    };
};

customElements.define('avaliacao-por-estrelas', Estrelas);
