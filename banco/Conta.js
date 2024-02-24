class Cliente{
    #nome;
    #endereco;
    #cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(endereco) {
        this.#endereco = endereco;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }
}

class Conta {
    #cliente; // objeto da classe Cliente
    #numeroConta;
    #saldo;
    #situacao;

    constructor(numeroConta, cliente, saldoInicial) {
        this.#cliente = cliente;
        this.#numeroConta = numeroConta;
        this.#saldo = Number(saldoInicial);
    }

    depositar(valor) {
        this.#saldo += Math.abs(valor);
    }

    sacar(valor) {
        valor = Math.abs(valor);
        if (valor === 0) {
            alert("Valor precisa ser maior do que zero.");
        } else if (this.#saldo >= valor) {
            this.#saldo -= valor;
        } else {
            alert("Saldo insuficiente.");
        }
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        this.#saldo += Number(valor);
    }

    get numeroConta() {
        return this.#numeroConta;
    }

    // TODO: outros getters e setters
}

export {Cliente, Conta};
