class Usuario {
    nome;
    cpf;
    endereco;
    email;
    senha;

    // constructor () {}
    constructor (nome, cpf, email, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}

const user = new Usuario();
console.log("user:");
console.log(user);

const userHeloise = new Usuario("Heloise", "12345678900", "heloise@senai.br", "password123");
const userCristian = new Usuario("Cristian", "231423432", "cristian@senai.br");

console.log(userHeloise);
console.log(userCristian);

class Pessoa {
    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }
    correr() {
        console.log(`${this.nome} está correndo!`)
    }
}

const pessoaRicardo = new Pessoa("Ricardo", 25, "8768976");
pessoaRicardo.correr();

const pessoaRandy = new Pessoa("Randy", 33, "908908");
pessoaRandy.correr();


class Retangulo {
    #altura;
    #largura;

    constructor(altura, largura) {
      this.#altura = altura;
      this.#largura = largura;
    }

    calcularArea() {
      return this.#altura * this.#largura;
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        this.#altura = altura;
    }

    get largura() {
        return this.#largura;
    }

    set largura(largura) {
        this.#largura = largura;
    }
}

const umRetangulo = new Retangulo(3, 5);
let areaDoRetangulo = umRetangulo.calcularArea();
console.log(areaDoRetangulo);

umRetangulo.calcularPerimetro = function() {
    return this.altura + this.largura;
}

console.log(umRetangulo.calcularPerimetro());

const outroRetangulo = new Retangulo(2, 7);
// outroRetangulo.calcularPerimetro(); // ERRO!

outroRetangulo.altura = 3;
console.log(`outroRetangulo: largura = ${outroRetangulo.largura}, altura = ${outroRetangulo.altura}`);
