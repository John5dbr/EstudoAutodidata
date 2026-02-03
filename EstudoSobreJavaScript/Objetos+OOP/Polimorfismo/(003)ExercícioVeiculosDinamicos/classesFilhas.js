import classeAbstrata from "./ClasseAbstrata.js";

class OnibusPublico extends classeAbstrata.classeAbstrataVeiculos {
    constructor(nomeDoVeiculo, tipoDoVeiculo, descricaoDoVeiculo, velocMaxima, precoFixo, precoPorKmRodado, capacidadeDeCombustivel, consumoDeCombustivel) {
        super(nomeDoVeiculo, tipoDoVeiculo, descricaoDoVeiculo, velocMaxima, precoFixo, precoPorKmRodado, capacidadeDeCombustivel, consumoDeCombustivel);
    }

    calcTempoMaximoSemReabastecer() {
        const capacMaximaDeCombustivel = this.capacidadeDeCombustivel;
        let distanciaMaxima = 0;
        do {
            this.capacidadeDeCombustivel -= this.consumoDeCombustivel
            distanciaMaxima += this.velocMaxima
        } while (this.capacidadeDeCombustivel > 0)
        console.log(`Percorrendo com uma velocidade máxima de ${this.velocMaxima}km/h com a capacidade máxima de combustível de ${capacMaximaDeCombustivel}L e consumindo ${this.consumoDeCombustivel}L a cada 1 hora o carro aguentará percorrer aproximadamente ${distanciaMaxima.toFixed(2)}km`)
    };

    calcPrecoDaViagem(distancia) {
        let preco = distancia * this.precoPorKmRodado + this.precoFixo;
        console.log(`Preço Da Viagem ( percusso de ${distancia}km ): R$${preco.toFixed(2)}`)
    };

    calcTempoDeViagem(distancia) {
        let tempo = distancia / this.velocMaxima * 0.9
        console.log(`Tempo Provável De Viagem ( percusso de ${distancia}km ): ${tempo.toFixed(2)} Horas`) 
    };
}

class MotoPropria extends classeAbstrata.classeAbstrataVeiculos {
    constructor(nomeDoVeiculo, tipoDoVeiculo, descricaoDoVeiculo, velocMaxima, precoFixo, precoPorKmRodado, capacidadeDeCombustivel, consumoDeCombustivel) {
        super(nomeDoVeiculo, tipoDoVeiculo, descricaoDoVeiculo, velocMaxima, precoFixo, precoPorKmRodado, capacidadeDeCombustivel, consumoDeCombustivel);
    }

    calcTempoMaximoSemReabastecer() {
        const capacMaximaDeCombustivel = this.capacidadeDeCombustivel;
        let distanciaMaxima = 0;
        do {
            this.capacidadeDeCombustivel -= this.consumoDeCombustivel
            distanciaMaxima += this.velocMaxima
        } while (this.capacidadeDeCombustivel > 0)
        console.log(`Percorrendo com uma velocidade máxima de ${this.velocMaxima}km/h com a capacidade máxima de combustível de ${capacMaximaDeCombustivel}L e consumindo ${this.consumoDeCombustivel}L a cada 1 hora o carro aguentará percorrer aproximadamente ${distanciaMaxima.toFixed(2)}km`)
    }; 

    calcPrecoDaViagem(distancia) {
        let preco = distancia * this.precoPorKmRodado + this.precoFixo;
        console.log(`Preço Da Viagem ( percusso de ${distancia}km ): R$${preco.toFixed(2)}`)
    };

    calcTempoDeViagem(distancia) {
        let tempo = distancia / this.velocMaxima * 0.9
        console.log(`Tempo Provável De Viagem ( percusso de ${distancia}km ): ${tempo.toFixed(2)} Horas`) 
    };
};

export default {
    onibusPublico: OnibusPublico,
    motoPropria: MotoPropria
}