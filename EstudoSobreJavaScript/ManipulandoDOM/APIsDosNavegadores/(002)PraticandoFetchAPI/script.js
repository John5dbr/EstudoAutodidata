import { manterSiteAtualizado, analisarDados, definirClima, mostrarClima, esconderClima } from "./scriptCentral.js";

// ======================================

window.addEventListener('load', manterSiteAtualizado)
manterSiteAtualizado();

// ======================================

let estados = [
    'Acre',
    'Amazonas',
    'Amapá',
    'Pará',
    'Rondônia',
    'Roraima',
    'Tocantins',
    'Alagoas',
    'Bahia',
    'Ceará',
    'Maranhão',
    'Paraíba',
    'Pernambco',
    'Piauí',
    'Rio Grande do Norte',
    'Sergipe',
    'Distrito Federal',
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Espírito Santo',
    'Minas Gerais',
    'Rio de Janeiro',
    'São Paulo',
    'Região Sul',
    'Paraná',
    'Rio Grande do Sul' 
];
let coordenadas;

analisarDados();

// ======================================

let climaCompleto;
let clima = {
    icon: ['Recursos/iconClimaFrescoResult.png', 'Recursos/imgClimaFrioResult.png', 'Recursos/imgClimaQuenteResult.png'],
    descricao: null,
    temp: null
};

let btnDefinirClima = document.getElementById("btnAnalisar");
btnDefinirClima.addEventListener('click', definirClima) 
definirClima();

// ======================================

let btnMostrarClima = document.getElementById("btnClima");
btnMostrarClima.addEventListener('mouseenter', mostrarClima)
mostrarClima();
btnMostrarClima.addEventListener('mouseout', esconderClima) 
esconderClima();
