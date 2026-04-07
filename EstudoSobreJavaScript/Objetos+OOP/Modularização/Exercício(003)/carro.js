let carros = [
    {
        marca: 'Ferrari',
        cor: 'Carmesin',
        preco: 200000,
        desconto: 0
    },
    {
        marca: 'Lamborguini',
        cor: 'Vermelho',
        preco: 250000,
        desconto: 2
    },
    {
        marca: 'Pourche',
        cor: 'Amarelo',
        preco: 150000,
        desconto: 2
    }
];

function desconto(valor) {
    let resultado = [];
    for ( let cont = 0 ; ( cont < valor.length ) ; cont++ ) {
        if (valor[cont].desconto != 0) {
            resultado.push(valor[cont])
            resultado[cont].preco = valor[cont].preco / valor[cont].desconto
        } else {
            resultado.push(valor[cont]) 
        }
    }
    return resultado
}

export default {
    listaDeCarros: carros,
    funcaoDesconto: desconto,
};
