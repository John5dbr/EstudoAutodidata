
let cards = document.getElementById("SessaoCards");
cards.addEventListener('click', mostrarEmQuemClicou)
function mostrarEmQuemClicou(event) {
    const alvo = event.target
    if (alvo.matches(".btnDetalhes") == true) {
        console.log(`Botão com idenficador {${alvo.dataset.identificador}} clicado. \nCard responsável: ${alvo.closest(".Card").getAttribute("id")}. \nElemento Ancestral em comum: ${alvo.parentElement.parentElement.getAttribute("id")}. \nStatus do btn: ${alvo.matches(".ativo")}.`)
        
    }
};
