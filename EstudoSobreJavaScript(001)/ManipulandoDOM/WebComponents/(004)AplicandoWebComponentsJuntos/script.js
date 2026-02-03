
export class HeaderPronto extends HTMLElement {
    
    // Regras para aplicar essa Web Components;
    // 1. O primeiro elemento deve conter um data-logo que define a imagem da logo a ser usada;
    // 2. Os próximos três elementos devem representar um títulos de três palavras;
    // 3. O restante dos elementos devem representar os links (somente tag <a>);

    constructor() {
        super();

        let shadowDOM = this.attachShadow({ mode: 'open' });

        let src = this.firstElementChild.dataset.logo;
        function configLogo() {
            return src
        };

        let estilos = document.createElement('style');
        estilos.innerHTML = `

            * {
                margin: 0px;
                padding: 0px;
            }

            /* ========================================== */

            .hdr {
                width: 100%;
                height: 90px;

                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around   ;
                align-items: center;
            }

            .hdr__asd {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                gap: 10px;

                margin: 0px 15px; 
            }
            .hdr__asd__logo {
                height: 70px;
                width: 50px;
                background: url('${configLogo()}') no-repeat center center / cover;
            }
            .hdr__asd__txt {
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;

                min-width: 100px;
            }
            .hdr__asd__txt > h1 {
                text-shadow: 2px 2px 2.5px rgba(0, 0, 0, 0.158);
                color: #FFB74D;
                font: normal bolder 1em arial;
            }
            .hdr__asd__txt > p {
                text-shadow: 2px 2px 2.5px rgba(0, 0, 0, 0.158);
                color: #FFB74D;
                font: normal normal .9em arial;
            }
        `;

        let html = document.createElement('div');
        html.innerHTML = `
            <header id="HeaderPrincipal" class="hdr">
                <aside class="hdr__asd">
                    <div class="hdr__asd__logo"></div>
                    <div class="hdr__asd__txt">
                        <h1>
                            <slot name="tituloParte1"></slot>
                        </h1>
                        <p>
                            <slot name="tituloParte2"></slot>
                        </p>
                        <h1>
                            <slot name="tituloParte3"></slot>
                        </h1>
                    </div>
                </aside>
                <nav class="hdr__nav">
                    <slot name="link"></slot
                </nav>
            </header>
        `;

        shadowDOM.append(estilos);
        shadowDOM.append(html);
    };

    connectedCallback() {
        let links = this.lastElementChild;
        links.style.cssText = `
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: center;
            column-gap: 25px;
            row-gap: 5px;
            padding: 0px 15px 0px 15px;
        `;
        let link = [...this.querySelectorAll('a')];
        link.forEach(el => el.style.cssText = `
            text-decoration: none;
            border-bottom: 2px solid rgba(0, 0, 0, 0);
            transition: all 0.25s ease-in-out 0s;
            text-shadow: 2px 2px 2.5px rgba(0, 0, 0, 0.158);
            color: black;
            font: normal bolder 1em arial;
        `);
        let ultimoLink = links.lastElementChild;
        ultimoLink.style.cssText = `
            color: #FFB74D;
            padding: 5px 15px;
            border: 2px solid #FFB74D;
            text-decoration: none;
            font: normal bolder 1em arial;
        `;
    };

};
customElements.define('header-pronto', HeaderPronto)

export class BannerPronto extends HTMLElement {

    // Regras para aplicar essa Web Components;
    // 1. O primeiro elemento deve conter um data-logo que define a imagem de fundo do banner;
    // 2. Os próximos dois elementos devem representar o título e uma estrutura de parágrafos, respectivamente;
    // 3. O último (e quarto) elemento deve conter buttons para alguma ação...;

    constructor() {
        super();

        let shadowDOM = this.attachShadow({ mode: 'open' });
        
        let src = this.firstElementChild.dataset.fundo;
        function definirFundoBanner(src) {
            return src;
        };
        
        let html = document.createElement('div');
        html.innerHTML = `
            <style>
                * {
                    margin: 0px;
                    padding: 0px;
                }

                /* ========================================== */

                .sec {
                    height: 70vh;
                    width: 100%;

                    background: url('${definirFundoBanner(src)}') no-repeat center center / cover; 
                    box-shadow: inset 0px 0px 5px black;
                }
                .sec__art {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-evenly;
                    align-items: center;

                    height: 100%;
                    min-width: 300px;
                    max-width: 25vw;
                        
                    padding: 10px 15px 0px 15px; 
                    background: white; 
                }
                .sec__art__slotTitulo {
                    display: block;
                    font: normal bold 1.55em arial;
                    margin: 0px 0px 20px 0px;
                }
                .sec__art__slotParagrafo {
                    display: block;
                    text-indent: 25px;
                    font: normal normal 1em arial;
                    padding: 0px 0px 10px 0px;
                    margin: 0px 0px 20px 0px;
                    border-bottom: 2px solid black;
                }
            </style>
            
            <slot name="definirFundoBanner" id="src"></slot>
            <section class="sec">
                <article class="sec__art">
                    <slot class="sec__art__slotTitulo" name="titulo"></slot>
                    <slot class="sec__art__slotParagrafo" name="paragrafo"></slot>
                    <span class="sec__art__btns">
                        <slot name="btns"><slot>
                    </span>
                </article>
            </section>
        `;
        
        shadowDOM.append(html)
    };

    connectedCallback() {
        let elementos = this.children;
        let elementoParaBtns = elementos[3];
        elementoParaBtns.style = `
            display: flex;
            flex-flow: column wrap;
            justify-content: space-evenly;
            align-items: center;
            gap: 10px 25px;
            
            height: 120px;
        `;
    };
};
customElements.define('banner-pronto', BannerPronto);

export class BotaoPronto extends HTMLElement {  

    // Regras para aplicar essa Web Components;
    // 1. O elemento deve conter 3 atributos chamados cor1, cor2 e cor3;
    // 2. Seus valores devem representar as respectivas cores que surgiram dentro do elemento;

    constructor() {
        super();

        let shadowDOM = this.attachShadow({ mode: 'open' });

        let html = document.createElement('div');

        html.innerHTML = `
            <style>
                #btn {
                    height: 30px;
                    width: 120px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid black;
                    transition: all 0.45s ease-in-out 0s;
                    overflow: hidden;
                }
                #btn:hover {
                    transform: scale(110%);
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.445);
                    border-radius: 5px;
                }
                #btn:hover > .btn__items {
                    transform: translateY(0%);
                }
                .btn__items__1 {
                    transition: all 0.45s ease-in-out 0s;
                }
                .btn__items__2 {
                    transition: all 0.2s ease-in-out 0s;
                }
                .btn__items__3 {
                    transition: all 0.35s ease-in-out 0s;
                }
                #btn > p {  
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    font: normal bold 0.8em 'arial';
                    color: black;
                }
                .btn__items {
                    width: 34.33%;
                    height: 100%;
                    transform: translateY(100%);
                }
            </style>
        
            <div id="btn">
                <div class="btn__items btn__items__1"></div>
                <div class="btn__items btn__items__2"></div>
                <div class="btn__items btn__items__3"></div>
                <p>
                    <slot name="link"></slot>
                </p>
            </div>
        `;

        shadowDOM.append(html);
    };

    static get observedAttributes() {
        return ['cor1', 'cor2', 'cor3'];  
    };

    attributeChangedCallback(atributo, valorAntigo, valorNovo) {
        if (atributo === 'cor1') {
            let btn = this.shadowRoot.querySelector('.btn__items__1');
            btn.style.background = `${valorNovo}`;
        } else if (atributo === 'cor2') {
            let btn = this.shadowRoot.querySelector('.btn__items__2');
            btn.style.background = `${valorNovo}`;
        } else if (atributo === 'cor3') {
            let btn = this.shadowRoot.querySelector('.btn__items__3');
            btn.style.background = `${valorNovo}`;
        }
    };

    connectedCallback() {
        let btn = this.shadowRoot.querySelector('#btn');
        btn.addEventListener('click', clicouNoBotao);
        function clicouNoBotao() {
            let mensagem = new CustomEvent('clicou-em-algum-botao', {
                detail: { detalhes: 'Algum botão criado via Web Components foi clicado...' },
                bubbles: false,
                composed: true
            });            

            this.dispatchEvent(mensagem);
        };
    };
};
customElements.define('botao-pronto', BotaoPronto);

let template = document.createElement('div');
template.innerHTML = `

    <footer>
        <section id="Localizacao">
            <slot name="Localizacao"><slot>
        </section>
        <section id="Contato">
            <slot name="Contato"><slot>
        </section>
        <div id="Linha"></div>
        <section id="Final">
            <aside>
                <slot name="txtFinal001"><slot>
            </aside>
            <aside>
                <slot name="txtFinal002"><slot>
            </aside>
        </section>
    </footer>

`;
export class FooterPronto extends HTMLElement {
    constructor() {
        super()

        let shadowDOM = this.attachShadow({ mode: 'open' });

        let style = document.createElement('style');
        style.innerHTML = `
            footer {
                margin: 25px 0px 0px 0px;
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: flex-start;
                align-content: space-evenly;
                padding: 25px;
                background: #8f8f8f;
                gap: 25px;
            }
            #Localizacao {
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
                align-items: flex-start;
                align-content: flex-start;
                gap: 10px;
                width: 450px;
            }
            slot {
                font: normal normal 1em 'arial';
            }
            #Contato {
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
                align-items: flex-start;
                align-content: flex-start;
                gap: 10px;
                align-self: flex-start;
                width: 350px;
            }
            #Linha {
                width: 100%;
                height: 2px;
                background: white;
            }
            #Final {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
            }
            @media (max-width: 900px) {
                footer {
                    justify-content: flex-start;
                }
            }
        `;

        shadowDOM.append(style);
        shadowDOM.append(template.cloneNode(true));

    };

    connectedCallback() {
        console.log('Funcionando...')
    };
};
customElements.define('footer-pronto', FooterPronto);
