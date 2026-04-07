
// Função do botão para voltar ao topo
let btnVoltarAoTopo = document.getElementById("voltarAoTopo");
btnVoltarAoTopo.addEventListener('click', voltarAoTopo)
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// Função para navegar pela página via menu
let nav = document.getElementById("nav");
nav.addEventListener('click', navegarPelasSessoes)
function navegarPelasSessoes(event) {
    alvo = event.target
    if (alvo.matches(".sessoes") == true) {
        let numeroDaSessao = alvo.dataset.sessao
        document.getElementById(numeroDaSessao).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    }
};

// Função para ter informações das dimensões/posições da sessão em relação o topo da página
let sessoes = document.getElementById("sessoes");
sessoes.addEventListener('click', mostrarInformacoes)
function mostrarInformacoes(event) {
    alvo = event.target
    if (alvo.classList.contains("informacoes") == true) {
        let dados = alvo.parentElement.getBoundingClientRect()
        console.log(`Centro da Sessão ${alvo.parentElement.getAttribute("id")} até o topo da página: ${dados.y} \nAltura: ${dados.height} \nLargura: ${dados.width}`)
    }
};
