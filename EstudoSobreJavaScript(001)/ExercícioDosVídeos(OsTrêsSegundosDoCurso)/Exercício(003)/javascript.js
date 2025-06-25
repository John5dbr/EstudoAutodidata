let botao = document.querySelector('input#botao')
botao.addEventListener('click', Click)
 
function Click() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let resp = document.querySelector('p#resp');
    let Ninicio = Number(inicio.value);
    let Pnumber = Number(Ninicio);
    let Nfim = Number(fim.value);
    let Nnumber = Number(Nfim);
    let Npasso = Number(passo.value);

    if (inicio.value.length >= 5 || fim.value.length >= 5 || Number(passo.value) == 0) {
        window.alert(`[ERRO] Um dos números excede nossa quantidade máxima (5 digitos) ou Passo inválidos`)
    } else if (Ninicio < Nfim) {
        resp.innerHTML = `Contando: <br> `
        resp.innerHTML += ` ${Pnumber} 👉 `
        do {
            resp.innerHTML += ` ${Pnumber += Npasso} 👉`
        } while (Pnumber <= (Nfim - Npasso)) 
        resp.innerHTML += ` 🏁`
    } else if (Ninicio > Nfim)  {
        resp.innerHTML = `Contando: <br> `
        resp.innerHTML += ` ${Pnumber} 👉 `
        do {
            resp.innerHTML += ` ${Pnumber -= Npasso} 👉`
        } while (Pnumber >= (Nfim + Npasso)) 
        resp.innerHTML += ` 🏁`
    }
}

/*Oi Pedro do futuro, se estiver lendo isso, vc é um inutil inconpetente pois ficou um defeito presente no input passo (tenta colocar um valor maior que do que tem nos outros input pra vc oq acontece) e vc sem conseguir resolver fugiu convardemente, é um bosta msm, na minha humilde opinião, vc deveria se matar se jogando no trem ou no metrô, a única misericordia que vc merece é morrer rápido. morra! ^^ */