
class Card extends HTMLElement {
    constructor() {
        super()

        let elementoCriado = this.attachShadow({ mode: 'open' });

        let htmlDoElementoCriado = document.createElement('div');
        htmlDoElementoCriado.innerHTML = `
            <div class="card">
                <h1>
                    <slot name="titulo" class="titulo"></slot>
                </h1>
                <p>
                    <slot name="paragrafo" class="paragrafo"></slot>
                </p>
            </div>
        `

        let estilos = document.createElement('style');
        estilos.innerHTML = `
            :host {
                display: block;
            }

            .card {
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-evenly;
                align-items: center; 
                padding: 5px 15px;
                max-width: 200px;
                height: 275px;
                background: gray;
                border: 2px solid black; 
            }

            .titulo {
                font: normal bold 1.2em arial;
            }

            .paragrafo {
                font: normal normal 1em arial;
            }
        `;

        elementoCriado.append(estilos);
        elementoCriado.append(htmlDoElementoCriado); 

    }
};

customElements.define('card-personalizado', Card);
