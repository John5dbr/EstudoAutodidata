let nomes = [
    'Paula',
    'Pedro',
    'Ana',
    'Carlos'
];

function adicionarNomes(nome) {
    nomes.push(nome)
};

function mostrarLista() {
    console.log(nomes.sort())
}

export default {
    listaNomes: mostrarLista,
    funcaoAdicionarNomes: adicionarNomes,
};
