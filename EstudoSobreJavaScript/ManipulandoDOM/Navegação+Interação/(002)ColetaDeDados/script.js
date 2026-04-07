
let resultado = document.getElementById("resultado");

let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener('click', verificar)
function verificar() {
    let curteSexo = null;
    if (document.getElementById("CurteSexo").checked == true) {
        curteSexo = 'Sim'
    } else if (document.getElementById("CurteSexo").checked == false) {
        curteSexo = 'Não'
    }
    let sexo = null;
    if (document.getElementById("feminino").checked == true) {
        sexo = 'Mulher'
    } else if (document.getElementById("masculino").checked == true) {
        sexo = 'Homem'
    } 
    // Primeiro Meio Usando Selected (para teste somente)
    /* let regioes = [...document.getElementById("regiao").children];
    let regiao = null;
    regioes.forEach( (el) => {if (el.selected == true) { regiao = el }} ) */
    // =====================
    console.log(`Nome: ${document.getElementById("nome").value} \nCurte sexo: ${curteSexo} \nSexo: ${sexo} \nRegião de nascença: ${document.getElementById("regiao").value}`)

    resultado.innerText = `Nome: ${document.getElementById("nome").value} \nCurte sexo: ${curteSexo} \nSexo: ${sexo} \nRegião de nascença: ${document.getElementById("regiao").value}` 
};