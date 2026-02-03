function soma(valor) {
    return valor.reduce( (ac, el) => { return ac + el } )
}

function subtracao(valor) {
    return  valor.reduce( (ac, el) => { return ac - el } )
}

function multiplicacao(valor) {
    return valor.reduce( (ac, el) => { return ac * el } )
}

function divisao(valor) {
    return valor.reduce( (ac, el) => { return ac / el } )
}

export default {
    soma: soma,
    subtracao: subtracao, 
    multiplicacao: multiplicacao,
    divisao: divisao    
}