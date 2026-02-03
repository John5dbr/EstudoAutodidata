
let ListaDeProdutos = document.getElementById("container-produtos");
ListaDeProdutos.addEventListener('click', gerenciarProdutos)
function gerenciarProdutos(event) {
    alvo = event.target

    // Mostrar detalhes
    if (alvo.matches(".detalhes") == true && alvo.parentElement.dataset.detalheexposto == 'true') {
        alvo.previousElementSibling.innerText = ``
        alvo.parentElement.dataset.detalheexposto = "false"
        alvo.value = 'Mostrar detalhes'
    } else if (alvo.matches(".detalhes") == true && alvo.parentElement.dataset.detalheexposto == 'false') {
        alvo.previousElementSibling.innerText = `Id do Produto: ${alvo.parentElement.dataset.id} \nCategoria: ${alvo.parentElement.dataset.categoria} \nPreço: ${alvo.parentElement.dataset.preco} \nDisponibilidade: ${alvo.parentElement.dataset.disponibilidade}`
        alvo.parentElement.dataset.detalheexposto = "true"
        alvo.value = 'Esconder detalhes'
    }

};

// Produto esgotado
let produtos = [...ListaDeProdutos.children];
produtos.forEach((element, index) => {
    if (element.dataset.disponibilidade == 'esgotado') {
        document.querySelectorAll(".descricao")[index].style.fontStyle = "italic"
        document.querySelectorAll(".descricao")[index].style.textDecoration = "underline"
    }
});


