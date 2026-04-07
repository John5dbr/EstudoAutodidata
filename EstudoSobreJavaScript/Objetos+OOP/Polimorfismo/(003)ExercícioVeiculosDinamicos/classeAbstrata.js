class Veiculos {
    constructor(nomeDoVeiculo, tipoDoVeiculo, descricaoDoVeiculo, velocMaxima, precoFixo, precoPorKmRodado, capacidadeDeCombustivel, consumoDeCombustivel) {
        if (this.constructor === Veiculos) {
            throw new TypeError(`Classes Abstratas Não Podem Ser Instanciadas.`)
        } else if (this.calcPrecoDaViagem === undefined) {
            throw new TypeError(`O Método calcPrecoDaViagem() Deve Ser Obrigatoriamente Implementado.`)
        } else if (this.calcTempoDeViagem === undefined) {
            throw new TypeError(`O Método calcTempoDeViagem() Deve Ser Obrigatoriamente Implementado.`)
        } else if (this.calcTempoMaximoSemReabastecer === undefined) {
            throw new TypeError(`O Método calcTempoMaximoSemReabastecer() Deve Ser Obrigatoriamente Implementado.`)
        }
        this.nomeDoVeiculo = nomeDoVeiculo;
        this.tipoDoVeiculo = tipoDoVeiculo;
        this.descricaoDoVeiculo = descricaoDoVeiculo;
        this.velocMaxima = velocMaxima;
        this.precoFixo = precoFixo;
        this.precoPorKmRodado = precoPorKmRodado;        
        this.capacidadeDeCombustivel = capacidadeDeCombustivel;
        this.consumoDeCombustivel = consumoDeCombustivel;       
    }

    #detalhesTecnicos = [];

    set adicionarDetalhesTecnicos(detalhe) {
        this.#detalhesTecnicos.push(detalhe)
    };

    get mostrarDetalhesTecnicos() {
        console.log(`========== Detalhes Técnicos - ${this.nomeDoVeiculo} ===========`)
        for ( let cont = 0 ; (cont < this.#detalhesTecnicos.length) ; cont++ ) {
            console.log(`${this.#detalhesTecnicos[cont]}`)
        }
        console.log(`========== Fins Dos Detalhes - ${this.nomeDoVeiculo} ===========`)
    }

    inforGerais() {
        console.log(`========== ${this.nomeDoVeiculo} =========== \nTipo de Veiculo: ${this.tipoDoVeiculo} \nDescrição do veiculo: ${this.descricaoDoVeiculo}`)
    }
};

export default {
    classeAbstrataVeiculos: Veiculos,
}