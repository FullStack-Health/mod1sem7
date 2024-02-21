let user = {
    nome: "João",
    sobrenome: "Oliveira",
    dataNascimento: "25/02/1991",
    cpf: "123.456.789-00",
    possuiFilhos: true,
    qtdFilhos: 1,
    calculaIdade: function calculaIdade() {
        return 2024 - 1991;
    }
}

console.log(user);

console.log(user.nome + " " + user.sobrenome);

user.nome = "João Victor";

console.log(user.nome + " " + user.sobrenome);

user.profissao = "Programador";

console.log(user.profissao);
console.log(user);
console.log(user["nome"]);

let opcaoUsuario = "nome";

console.log(user[opcaoUsuario]);

delete user.profissao;

console.log(user);

user.calculaIdade = function() {
    // TODO
    //
    return 1;
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
