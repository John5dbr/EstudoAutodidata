
let btnSalvarTarefa = document.getElementById("salvarTarefa");
btnSalvarTarefa.addEventListener('click', salvarTarefa)
function salvarTarefa() {
    if (document.getElementById("tarefa").value == '') {
        // Fazendo validação
        document.getElementById("tarefa").style = `border: 1px solid red; border-right: none;`
        btnSalvarTarefa.style = `border: 1px solid red;`
    } else if (document.getElementsByClassName("lista__item").length == 6) {
        // Fazendo validação
        document.getElementById("tarefa").style = `border: 1px solid yellow; border-right: none;`
        btnSalvarTarefa.style = `border: 1px solid yellow;`
    } else {
        // Item da lista
        let novoItem = document.createElement("article");
        novoItem.classList.add("lista__item")
        // Texto do item da lista
        let novoItemTxt = document.createElement("p");
        novoItemTxt.innerText = document.getElementById("tarefa").value
        novoItemTxt.classList.add("lista__item__txt")
        // Icone do item da lista
        let novoItemIcon = document.createElement("img");
        novoItemIcon.classList.add("lista__item__icon")
        novoItemIcon.setAttribute("src", "Recursos/check-icon.svg")

        // Atribuição na lista
        novoItem.append(novoItemTxt)
        novoItem.append(novoItemIcon)
        lista.prepend(novoItem)

        // Desfazendo validação
        document.getElementById("tarefa").style = `border: none;`
        btnSalvarTarefa.style = `border: none;`
    }
};

let inputTxtTarefa = document.getElementById("tarefa");
inputTxtTarefa.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        salvarTarefa();
    }
})

let lista = document.getElementById("lista");
lista.addEventListener('click', concluirTarefa)
function concluirTarefa(event) {
    // Recurso que indica se uma tarefa está concluída ou não
    if (event.target.classList.contains("lista__item__icon") == true) {
        if (event.target.parentElement.classList.contains("lista__item--concluido") == true) {
            event.target.parentElement.classList.toggle("lista__item--concluido")
        } else if (event.target.parentElement.classList.contains("lista__item--concluido") == false) {
            event.target.parentElement.classList.toggle("lista__item--concluido")
        }
    } 
};

let btnExtras = document.getElementById("btnExtras");
btnExtras.addEventListener('click', botoesDeLimpeza)
function botoesDeLimpeza(event) {
    let itemsDaLista = [...document.getElementsByClassName("lista__item")];

    // Remoção de todas as tarefas
    if (event.target.getAttribute("id") == 'limparLista') {
        itemsDaLista.forEach((el) => {el.remove()})
    }
    
    // Remoção das tarefas concluídas
    if (event.target.getAttribute("id") == 'apagarTarefasRealizadas') {
        itemsDaLista.forEach((el) => {
            if (el.classList.contains("lista__item--concluido") == true) {
                el.remove() 
            }
        })
    } 
};
