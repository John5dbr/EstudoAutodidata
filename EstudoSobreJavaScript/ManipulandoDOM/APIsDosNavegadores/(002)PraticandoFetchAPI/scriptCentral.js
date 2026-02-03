// ===============================================
// Código para manter o site atualizado automaticamente

export function manterSiteAtualizado() {
    if (localStorage.getItem('cidade') != null) {
        document.getElementById("cidade").value = localStorage.getItem('cidade')
    }
};

// ===============================================
// Código para converter o local em coordenadas.
 
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

export async function analisarDados() {
    const cidade = document.getElementById("cidade");

    // Identificando e validando a cidade inserida pelo usuário.
    let validandoCidade = estados.findIndex(el => el == cidade.value)
    if (validandoCidade == -1) {
        cidade.classList.add("erro")
        cidade.classList.remove("sucesso")
        throw new TypeError(`Cidade Inválida.`)
    } else {
        cidade.classList.add("sucesso")
        cidade.classList.remove("erro")

        const url_LocalParaCoordenadas = `http://api.openweathermap.org/geo/1.0/direct?q=${cidade.value}&appid=fc0edccfe0ce06d54d69ac5005c5bb15`
        await fetch(url_LocalParaCoordenadas)
            .then(async respAPI => {
                if (respAPI.ok) {
                    coordenadas = await respAPI.json() 
                } else {
                    throw new TypeError(`Aplicação com API falhada.`) 
                }
            })
            .catch(() => {
                console.error(`Requisição com API falha.`) 
            });
    }
};

// ===============================================
// Código para, utilizando as coordenadas, informar o clima ao usuário.

let climaCompleto;
let clima = {
    icon: ['Recursos/iconClimaFrescoResult.png', 'Recursos/imgClimaFrioResult.png', 'Recursos/imgClimaQuenteResult.png'],
    descricao: null,
    temp: null
};

export async function definirClima() {
    let cidadeResult = document.getElementById("cidadeResult");
    let tempResult = document.getElementById("tempResult");
    let iconResult = document.getElementById("iconResult");
    let descriptionResult = document.getElementById("descriptionResult");

    const cidade = document.getElementById("cidade");

    await analisarDados();

    const url_CoordenadasParaClima = `https://api.openweathermap.org/data/2.5/weather?lat=${coordenadas[0].lat}&lon=${coordenadas[0].lon}&uniq=metric&lang=pt_br&appid=fc0edccfe0ce06d54d69ac5005c5bb15`;
    await fetch(url_CoordenadasParaClima)
        .then(async respAPI => {
            if (respAPI.ok) {
                climaCompleto = await respAPI.json()
                clima.descricao = climaCompleto.weather[0].description
                clima.temp = (climaCompleto.main.temp - 275.15).toFixed(1)

                localStorage.setItem('cidade', cidade.value)

                cidadeResult.innerText = `${cidade.value}`
                tempResult.innerText = `${clima.temp}º`
                descriptionResult.innerText = `${clima.descricao}`

                if (clima.temp >= 26) {
                    iconResult.src = `${clima.icon[2]}`
                } else if (clima.temp <= 25 && clima.temp >= 15) {
                    iconResult.src = `${clima.icon[0]}`
                } else if (clima.temp <= 14) {
                    iconResult.src = `${clima.icon[1]}`
                }

            } else {
                throw new TypeError(`Aplicação com API falhada.`) 
            }
        })
        .catch(() => {
            console.error(`Requisição com API falha.`)
        });
};

// ===============================================
// Código para permitir a visão do clima ao usuário.

export function mostrarClima() {

    const cidade = document.getElementById("cidade");
    let validandoCidade = estados.findIndex(el => el == cidade.value)

    if (clima.temp === null) {
        return;
    } else if (clima.descricao === null) {
        return;
    } else if (validandoCidade == -1) {
        return;
    } else {
        let elementoParaMostrar = document.getElementById("secClimaResult");
        elementoParaMostrar.classList.remove("escondido")
    }
};
export function esconderClima() {
    let elementoParaMostrar = document.getElementById("secClimaResult");
    elementoParaMostrar.classList.add("escondido")
};

// ===============================================