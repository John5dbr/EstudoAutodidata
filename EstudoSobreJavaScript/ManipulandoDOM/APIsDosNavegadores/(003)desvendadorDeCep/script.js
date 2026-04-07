
// ========================================================================
// Fazendo o site se atualizar automaticamente

window.addEventListener('load', siteAtualizado);
function siteAtualizado() {
    let txtCep = document.getElementById('inputCep');
    if (localStorage.getItem('cep') != null) {
        txtCep.value = `${localStorage.getItem('cep')}`;
    }
};

// ========================================================================
// Aplicando efeito parallax na imagem dentro do Banner

window.addEventListener('mousemove', efeitoParallax);
function efeitoParallax(event) {

    let posicaoOuTamanho = {
        metadeDaLarguraViewport: null,
        metadeDaAlturaViewport: null, 
        y: null,
        x: null
    };
    let banner = document.querySelector('.conteinerBanner__Banner');
    let speedBanner = Number(banner.dataset.speed);

    posicaoOuTamanho.metadeDaLarguraViewport = window.innerWidth / 2
    posicaoOuTamanho.x = event.clientX - posicaoOuTamanho.metadeDaLarguraViewport

    posicaoOuTamanho.metadeDaAlturaViewport = window.innerHeight / 2
    posicaoOuTamanho.y = event.clientY - posicaoOuTamanho.metadeDaAlturaViewport

    banner.style.transform = `translate(${-posicaoOuTamanho.x / speedBanner}px, ${-posicaoOuTamanho.y / speedBanner}px)`

};

// ========================================================================
// Função que aplica a resposta da API ao site

let btnBuscarCep = document.getElementById('btnBuscarCep');
btnBuscarCep.addEventListener('click', aplicarCepNoSite) 
async function aplicarCepNoSite() {

    let pCep = document.getElementById('pCep');
    let pRua = document.getElementById('pRua');
    let pBairro = document.getElementById('pBairro');
    let pEstado = document.getElementById('pEstado');

    let cep = await buscarCep();

    if (cep == undefined) {
        // Em caso de falha do brasilAPI
        pCep.innerText = `Cep: Não-Achado ou API indisp.`;
        pRua.innerText = `Rua: Não-Achado ou API indisp.`;
        pBairro.innerText = `Bairro: Não-Achado ou API indisp.`;
        pEstado.innerText = `Estado: Não-Achado ou API indisp.`;   
    } else if (cep.api == 'brasilAPI') {
        // Em caso sucesso do brasilAPI
        pCep.innerText = `Cep: ${cep.respostaAPI.cep} - brasilAPI`;
        pRua.innerText = `Rua: ${cep.respostaAPI.street}`;
        pBairro.innerText = `Bairro: ${cep.respostaAPI.neighborhood}`;
        pEstado.innerText = `Estado: ${cep.respostaAPI.state}`;
    } else if (cep.respostaAPI.erro == 'true') {
        // Em caso de falha da viaCEP
        pCep.innerText = `Cep: Não-Achado ou API indisp.`;
        pRua.innerText = `Rua: Não-Achado ou API indisp.`;
        pBairro.innerText = `Bairro: Não-Achado ou API indisp.`;
        pEstado.innerText = `Estado: Não-Achado ou API indisp.`;  
    } else if (cep.api == 'viaCEP' && cep.respostaAPI.erro == undefined) {
        // Em caso sucesso do viaCEP
        pCep.innerText = `Cep: ${cep.respostaAPI.cep} - viaCEP`;
        pRua.innerText = `Rua: ${cep.respostaAPI.logradouro}`;
        pBairro.innerText = `Bairro: ${cep.respostaAPI.bairro}`;
        pEstado.innerText = `Estado: ${cep.respostaAPI.estado}`;
    }

};

// ========================================================================
// Função que aplica o Fetch API com a API principal viaCEP e a API extra BrasilAPI

async function buscarCep() {
    let detalhesDeRequisicao = {
        method: 'GET'
    };

    try {
        let txtCep = document.getElementById('inputCep').value;
        let validacao = validacaoDeCep(txtCep);
        if (validacao == false) {
            alert(`Falha detectada na validação do cep inserido.`)
            console.warn(`Falha detectada na validação do cep inserido.`)
            throw new Error()
        } else if (validacao == true) {
            console.log(`Nenhum problema detectado na validação.`)

            localStorage.setItem('cep', txtCep)

            let url = `https://viacep.com.br/ws/${txtCep}/json/`
            let respAPI = await fetch(url, detalhesDeRequisicao);

            if (respAPI.ok) {
                let respAPIemJSON = await respAPI.json()
                return {respostaAPI: respAPIemJSON, api: 'viaCEP'};
            } else {    
                throw new Error()
            }
        }
    } catch {
        console.error(`Falha na requisição ou na validação. Usando API extras...`)
        return buscarCepPlanoB();
    } 
};

async function buscarCepPlanoB() {
    let detalhesDeRequisicao = {
        method: 'GET'
    };

    try {
        let txtCep = document.getElementById('inputCep').value;
        let validacao = validacaoDeCep(txtCep);
        if (validacao == false) {
            throw new Error()
        } else if (validacao == true) {
            console.log(`Nenhum problema detectado na validação.`)

            let url = `https://brasilapi.com.br/api/cep/v1/${txtCep}`
            let respAPI = await fetch(url, detalhesDeRequisicao);

            if (respAPI.ok) {
                let respAPIemJSON = await respAPI.json()
                return {respostaAPI: respAPIemJSON, api: 'brasilAPI'};
            } else {    
                throw new Error()
            }
        }
    } catch {
        console.error(`Falha na requisição API extra. Provável falha interna.`)
    } 
};

// ========================================================================
// Função para realizar a validação do CEP inserido pelo usuário

function validacaoDeCep(txt) {
    let falhasDetectadas = 0;
    let validador = null;

    let numeros = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];

    if (txt.length == 8) {
        for (let cont = 0 ; cont < txt.length ; cont++) {
            if (numeros.some(el => el == txt[cont]) == false) {
                falhasDetectadas += 1 
            }
        }
        if (falhasDetectadas == 0) {
            validador = true
        } else {
            validador = false
        }
    } else {
        validador = false
    }

    return validador;

};
