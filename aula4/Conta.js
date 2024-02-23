class Cliente{
    nome;
    endereco;
    cpf;
}

class Conta {
    #cliente; // objeto da classe Cliente
    #numeroConta;
    #saldo;

    constructor(numeroConta) {
        this.#cliente = new Cliente();
        this.#numeroConta = numeroConta;
        this.#saldo = 0;
    }

    depositar() {
        // TODO
    }

    sacar() {
        // TODO
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        this.#saldo += valor;
    }
}

class ContaCorrente extends Conta {
    limite;
}

class ContaPoupanca extends Conta {
    #rendimento;

    constructor(numeroConta, rendimento) {
        super(numeroConta);
        this.#rendimento = rendimento;
    }

    getRendimento() {
        return this.#rendimento * this.saldo;
    }
}

export {Cliente, Conta, ContaCorrente, ContaPoupanca};
