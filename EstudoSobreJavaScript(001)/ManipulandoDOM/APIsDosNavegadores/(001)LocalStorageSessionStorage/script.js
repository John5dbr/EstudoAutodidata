
let nomeDoUsuario = document.getElementById("nomeDoUsuario");

let dados = {
    modo: 'claro',
    fonte: 16,
    mostrarNome: true
};

window.addEventListener('load', atualizado)
function atualizado() {

    if (localStorage.getItem('dados') != null) {
        let dadosPeloLocalStorage = JSON.parse(localStorage.getItem('dados'));

        dados = {
            modo: dadosPeloLocalStorage.modo,
            fonte: dadosPeloLocalStorage.fonte,
            mostrarNome: dadosPeloLocalStorage.mostrarNome
        };

        if (dados.modo == 'claro') {
            nomeDoUsuario.classList.remove("escuro");
            dados.modo = 'claro'
            document.getElementById('modo').dataset.modo = 'claro'
        } else if (dados.modo == 'escuro') {
            nomeDoUsuario.classList.add("escuro");
            dados.modo = 'escuro'
            document.getElementById('modo').dataset.modo = 'escuro'
        }
        if (dados.mostrarNome == true) {
            nomeDoUsuario.classList.remove("ocultar")
            dados.mostrarNome = true
            document.getElementById('mostraUsuario').removeAttribute('checked', 'checked')
        } else if (dados.mostrarNome == false) {
            nomeDoUsuario.classList.add("ocultar")
            dados.mostrarNome = false
            document.getElementById('mostraUsuario').setAttribute('checked', 'checked')
        }
        nomeDoUsuario.style.fontSize = `${dados.fonte}px`
        document.getElementById('tamanhoFonte').value = dados.fonte
    }
};

let form = document.getElementById('form');
form.addEventListener('click', formulario)
function formulario(event) {
    let alvo = event.target;
    if (alvo.getAttribute('id') == 'modo') {
        // Comando sobre os modos
        if (alvo.dataset.modo == 'claro') {
            nomeDoUsuario.classList.toggle("escuro");
            dados.modo = 'escuro'
            alvo.dataset.modo = 'escuro'
        } else if (alvo.dataset.modo == 'escuro') {
            nomeDoUsuario.classList.toggle("escuro");
            dados.modo = 'claro'
            alvo.dataset.modo = 'claro'
        }

        localStorage.setItem('dados', JSON.stringify(dados))
    }
    // Comando sobre ocultar o usuario
    if (alvo.getAttribute('id') == 'mostraUsuario') {
        if (alvo.checked == true) {
            nomeDoUsuario.classList.add("ocultar")
            dados.mostrarNome = false

            localStorage.setItem('dados', JSON.stringify(dados))
        } else if (alvo.checked == false) {
            nomeDoUsuario.classList.remove("ocultar")
            dados.mostrarNome = true

            localStorage.setItem('dados', JSON.stringify(dados))
        }
    }
};

let inputParaFonte = document.getElementById('tamanhoFonte');
inputParaFonte.addEventListener('input', alterarFonte)
function alterarFonte(event) {
    // Comando sobre a fonte
    nomeDoUsuario.style.fontSize = `${event.currentTarget.value}px`
    dados.fonte = `${event.currentTarget.value}`

    localStorage.setItem('dados', JSON.stringify(dados))
};
