export let numeroDeContasCriadas = null;

class Conta {

    constructor (titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
        numeroDeContasCriadas++
    }

    depositar(valor) {
        this.saldo += valor
    };
        
    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo Insuficiente.`);    
        } else {
            this.saldo -= valor
        }
    };

    informacoes() {
        console.log(`Informações da Conta \nTitular: ${this.titular} \nSaldo: R$ ${this.saldo}
        `)
    };

}

class ContaCorrente extends Conta {
    constructor (titular, saldo) {
        super(titular, saldo);
    }

    #limiteDeCredito;

    get mostrarLimiteDeCredito() {
        console.log(`Limite de Crédito: ${this.#limiteDeCredito}`)
    };

    set definirLimiteDeCredito(valor) {
        this.#limiteDeCredito = valor
    };

    sacar(valor, resultado) {
        resultado = this.saldo - valor
        if (resultado < this.#limiteDeCredito) {
            console.log(`Limite para Crédito Insuficiente.`);
        } else {
            this.saldo -= valor
        }
    };

}

class ContaPoupanca extends Conta {
    constructor (titular, saldo) {
        super(titular, saldo);
    }

    #taxaAnual;

    get mostrarTaxaAnual() {
        console.log(`Taxa Anual: ${this.#taxaAnual}% \nValor a ser descontado: R$ ${this.saldo * this.#taxaAnual / 100}`)
    };

    set definirTaxaAnual(valor) {
        this.#taxaAnual = valor
    };

    calcularJuros() {
        this.saldo -= this.saldo * this.#taxaAnual / 100
    }

} 

export default { 
    Conta,
    ContaCorrente,
    ContaPoupanca,
}; 
