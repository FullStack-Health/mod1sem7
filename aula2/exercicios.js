let array = [
    {
        nome: "Rayane",
        sobrenome: "Cristina",
        idade: 21
    },
    {
        nome: "Carlos",
        sobrenome: "Henrique",
        idade: 17
    },
    {
        nome: "Julio",
        sobrenome: "Cesar",
        idade: 19
    },
    {
        nome: "Camila",
        sobrenome: "Fernandes",
        idade: 18
    },
    {
        nome: "Julia",
        sobrenome: "Fernandes",
        idade: 10
    },
    {
        nome: "Bruno",
        sobrenome: "Albuquerque",
        idade: 31
    },
    {
        nome: "Túlio",
        sobrenome: "Bastos",
        idade: 22
    },
    {
        nome: "Cristiane",
        sobrenome: "Maria",
        idade: 41
    },
    {
        nome: "Mário",
        sobrenome: "Bros",
        idade: 5
    }
];

console.log(array.filter((pessoa) => pessoa.idade >= 18));

const maioresIdade = array.filter((usuario) => usuario.idade >= 18);
const primeiroMaiorTrinta = maioresIdade.find((usuario) => usuario.idade > 30);
document.querySelector("h1").innerHTML = primeiroMaiorTrinta.nome + " " + primeiroMaiorTrinta.sobrenome;

let umMaiorDeTrinta = array
                        .filter((pessoa) => pessoa.idade >= 18)
                        .find((pessoa) => pessoa.idade >= 30);
let novoElemento = document.createElement("h1");
novoElemento.innerText = umMaiorDeTrinta.nome + " " + umMaiorDeTrinta.sobrenome;
document.body.appendChild(novoElemento);

// solução Felipe
let menoresDeDezoito = array.filter((pessoa) => pessoa.idade < 18);
let menoresDeDezoitoAtualizado = menoresDeDezoito.map((pessoa) => {
    pessoa.anosParaMaioridade = 18 - pessoa.idade;
    return pessoa;
});

console.log("menoresDeDezoito com anos para maioridade");
console.log(menoresDeDezoitoAtualizado);
console.log(menoresDeDezoito);


// solução proposta pelo Cristian
// menoresDeDezoito.forEach(pessoa => pessoa.anosParaMaioridade = 18 - pessoa.idade);
// console.log(menoresDeDezoito);


// solução Heloise
// let menoresDeIdade = array.filter((pessoa)=>pessoa.idade<18);

// function faltaQuantoPara18(pessoa) {
//     diferenca = 18 - pessoa.idade
//     pessoa.anosParaMAioridade = diferenca
//     return pessoa
// }

// console.log(menoresDeIdade.map(faltaQuantoPara18))
