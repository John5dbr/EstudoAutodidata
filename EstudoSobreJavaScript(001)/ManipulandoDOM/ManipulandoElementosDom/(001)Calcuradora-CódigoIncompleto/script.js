
// Definindo Valores Gerais

let temResultado = false
let temOperador = false;

/*================================================*/ 

// Gerando histórico

let historico = [];

/*================================================*/

// Guardandos os Botoes em Variaveis

// Botoes para Numeros 
let botoesNumeros = [...document.getElementsByClassName("botoesNumeros")];

// Botoes para Operadores 
let botoesOperadores = [...document.getElementsByClassName("botoesOperadores")];

// Botao para Calcular 
let botaoCalcular = document.getElementById("Calc");

// Botao para Deletar 
let botaoDeletar = document.getElementById("Del");

let botaoHistorico = document.getElementById("Hist");

/*================================================*/ 

// Gerando Espaço para o Primeiro Numero da Conta, o Segundo Numero da Conta e o Operador da Conta

let areaDeContas = document.getElementById("AreaDeContas");

let regiaoParaCalculo = document.getElementById("RegiaoParaCalculo");

// Para Primeiro Numero
let primeiroNumero = document.createElement("span");
regiaoParaCalculo.appendChild(primeiroNumero)

primeiroNumero.setAttribute("id", "PrimeiroNumero");

// Para Operador da Conta
let operador = document.createElement('span');
regiaoParaCalculo.appendChild(operador);

operador.setAttribute("id", "Operador");

// Para Segundo Numero
let segundoNumero = document.createElement("span");
regiaoParaCalculo.appendChild(segundoNumero)

segundoNumero.setAttribute("id", "segundoNumero");

/*================================================*/ 

// Permitindo que os Botoes Para Numeros Sejam Usados 

botoesNumeros.forEach( el => {
    el.addEventListener("click", criandoPrimeiroNumero)
    function criandoPrimeiroNumero() {
        if (temResultado == true) {
            alert(`ERROR - Delete o calculo realizado antes de fazere outra conta`)
        } if (temOperador == false) { 
            primeiroNumero.innerHTML += `${el.textContent}`
        } else if (temOperador == true) {
            segundoNumero.innerHTML += `${el.textContent}`
        } 
    };
});

/*================================================*/  

// Permitindo que os Botoes para Operadores Sejam Usados

botoesOperadores.forEach( el => {
    el.addEventListener("click", definindoOperacao)
    function definindoOperacao() {
        if (temOperador == false) {
            operador.innerHTML += `${el.textContent}`
        } else {
            alert(`ERROR - Não pode mais de um operador`)
        }
        temOperador = true
    };
});

/*================================================*/

// Permitindo que o Botao para Calcular Seja Usado

espacoParaSlots = document.getElementById("espacoParaSlotsDeCalculos");

botaoCalcular.addEventListener("click", calcular)
function calcular() {

    // Calculo
    if (temResultado == false) {
        let resultado = document.createElement("p");
        regiaoParaCalculo.appendChild(resultado);
        resultado.setAttribute("id", "Resultado")
        resultado.style = `font-size: 1.5em; font-weight: bold; text-align: right;`   
        if (operador.textContent === "+") {
            resultado.innerHTML = Number(primeiroNumero.textContent) + Number(segundoNumero.textContent);
            historico.push(`${primeiroNumero.textContent} + ${segundoNumero.textContent} = ${resultado.textContent}`)
            // Adição do Calculo no Histórico
            let slotParaCalculo = document.createElement("aside");
            espacoParaSlots.prepend(slotParaCalculo)
            slotParaCalculo.innerHTML = `${historico[historico.length - 1]}`
            slotParaCalculo.classList.add("slotCalculo");
        } else if (operador.textContent === "-") {
            resultado.innerHTML = Number(primeiroNumero.textContent) - Number(segundoNumero.textContent);
            historico.push(`${primeiroNumero.textContent} - ${segundoNumero.textContent} = ${resultado.textContent}`)
            // Adição do Calculo no Histórico
            let slotParaCalculo = document.createElement("aside");
            espacoParaSlots.prepend(slotParaCalculo)
            slotParaCalculo.innerHTML = `${historico[historico.length - 1]}`
            slotParaCalculo.classList.add("slotCalculo");
        } else if (operador.textContent === "/") {
            resultado.innerHTML = Number(primeiroNumero.textContent) / Number(segundoNumero.textContent);
            historico.push(`${primeiroNumero.textContent} / ${segundoNumero.textContent} = ${resultado.textContent}`)
            // Adição do Calculo no Histórico
            let slotParaCalculo = document.createElement("aside");
            espacoParaSlots.prepend(slotParaCalculo)
            slotParaCalculo.innerHTML = `${historico[historico.length - 1]}`
            slotParaCalculo.classList.add("slotCalculo");
        } else if (operador.textContent === "*") {
            resultado.innerHTML = Number(primeiroNumero.textContent) * Number(segundoNumero.textContent);
            historico.push(`${primeiroNumero.textContent} * ${segundoNumero.textContent} = ${resultado.textContent}`)
            // Adição do Calculo no Histórico
            let slotParaCalculo = document.createElement("aside");
            espacoParaSlots.prepend(slotParaCalculo)
            slotParaCalculo.innerHTML = `${historico[historico.length - 1]}`
            slotParaCalculo.classList.add("slotCalculo");
        }   
    } else {
        areaDeContas.style.cssText = `
            border: 2px solid rgba(255, 0, 0);
        `
    }
    temResultado = true

};


/*================================================*/

// Permitindo que o Botao para Deletar Seja Usado

botaoDeletar.addEventListener("click", deletar) 
function deletar() {
    primeiroNumero.innerText = ``
    operador.innerText = ``
    segundoNumero.innerText = ``
    regiaoParaCalculo.appendChild(primeiroNumero)
    regiaoParaCalculo.appendChild(operador)
    regiaoParaCalculo.appendChild(segundoNumero)
    if (temResultado == true) {
        document.getElementById("Resultado").remove()
    }
    temOperador = false
    temResultado = false
};

/*================================================*/

// Permitindo que o Botao de Mostrar o Histórico Seja Usado Seja Usado

let historicoEscondido = true

botaoHistorico.addEventListener("click", mostrarHistorico)
function mostrarHistorico() {

    const abaHistorico = document.getElementById("AbaHistorico");

    if (historicoEscondido == true) {
        abaHistorico.style = `transform: translateX(0%);`
        historicoEscondido = false
    } else if (historicoEscondido == false) {
        abaHistorico.style = `transform: translateX(125%);`
        historicoEscondido = true
    }
};

/*================================================*/
