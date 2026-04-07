
class HeaderInterativo extends HTMLElement {
    constructor() {
        super();

        let miniDocumento = this.attachShadow({ mode: 'open' });
        
        let estilo = document.createElement('style');
        estilo.innerHTML = `
            .hdr {
                position: relative;

                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                gap: 25px;

                width: 350px;

                padding: 5px 10px;
            }
            .hdr__art {
                z-index: 1;
                
                display: flex;
                justify-content: center;
                align-items: center;

                height: 50px;
                width: 50px;
                
                border-radius: 100px;

                font: normal normal 1.2em arial;
                background: gray;
                color: white;
            }
            .art1 {
                width: 15px;
            }
            .art2 {
                width: 90px;
            }
            .art3 {
                width: 165px;
            }
            .art4 {
                width: 240px;
            }
            .art5 {
                width: 315px;
            }

            #linha {
                position: absolute;
                left: 27.5px;

                height: 15px;
                
                border-radius: 10px;

                background: gray;

                transition: all 0.25s linear 0s;
            }
        `

        let estruturaHTML = document.createElement('header');
        estruturaHTML.classList.add('hdr');
        estruturaHTML.innerHTML = `
            <div id="linha" class="art1"></div>
            <article class="hdr__art" id="art01">1</article>
            <article class="hdr__art" id="art02">2</article>
            <article class="hdr__art" id="art03">3</article>
            <article class="hdr__art" id="art04">4</article>
            <article class="hdr__art" id="art05">5</article>
        `

        miniDocumento.append(estilo);
        miniDocumento.append(estruturaHTML);
    };

    connectedCallback() {
        function cliqueNoItems(el) {
            let header = document.querySelector('header-interativo');

            let itemClicado = el.target;
            let idDoItemClicado = itemClicado.getAttribute('id');
            let linha = header.shadowRoot.getElementById('linha');

            if (idDoItemClicado == 'art01') {
                linha.classList.add('art1')
                linha.classList.remove('art2')
                linha.classList.remove('art3')
                linha.classList.remove('art4')
                linha.classList.remove('art5')
            } else if (idDoItemClicado == 'art02') {
                linha.classList.remove('art1')
                linha.classList.add('art2')
                linha.classList.remove('art3')
                linha.classList.remove('art4')
                linha.classList.remove('art5')
            } else if (idDoItemClicado == 'art03') {
                linha.classList.remove('art1')
                linha.classList.remove('art2')
                linha.classList.add('art3')
                linha.classList.remove('art4')
                linha.classList.remove('art5')
            } else if (idDoItemClicado == 'art04') {
                linha.classList.remove('art1')
                linha.classList.remove('art2')
                linha.classList.remove('art3')
                linha.classList.add('art4')
                linha.classList.remove('art5')
            } else if (idDoItemClicado == 'art05') {
                linha.classList.remove('art1')
                linha.classList.remove('art2')
                linha.classList.remove('art3')
                linha.classList.remove('art4')
                linha.classList.add('art5')
            } 
        };

        let header = document.querySelector('header-interativo');
        let items = [...header.shadowRoot.querySelectorAll('.hdr__art')];
        items.forEach(el => {
            el.addEventListener('click', cliqueNoItems);
        });
    };
};

customElements.define('header-interativo', HeaderInterativo);
