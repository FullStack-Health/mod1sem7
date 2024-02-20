let arrayOriginal = [1,2,3,4,5,6,7,8,9,10];

let ulOriginal = document.querySelector("#lista-original");
let ulFiltrada = document.querySelector("#lista-filtrada");
let btnFiltrar = document.querySelector("#btn-filtrar");

function preencheListaOriginal() {
    arrayOriginal.forEach((numero) => {
        let liOriginal = document.createElement("li");
        liOriginal.innerHTML = numero;
        ulOriginal.appendChild(liOriginal);
    });
}

preencheListaOriginal();

function filtrarArrayPares(arrayOriginal) {
    return arrayOriginal.filter(numero => numero % 2 === 0);
}

function preencheListaFiltrada(arrayFiltrado) {
    arrayFiltrado.forEach(numero => {
        let liFiltrado = document.createElement("li");
        liFiltrado.innerHTML = numero;
        ulFiltrada.appendChild(liFiltrado);
    })
}

btnFiltrar.addEventListener("click", function() {
    preencheListaFiltrada(filtrarArrayPares(arrayOriginal));
});


arrayIdades = [21, 17, 19, 18, 10, 31, 22, 41, 5];

console.log("Array original:");
console.log(arrayIdades);

console.log("Array filtrado:")
console.log(arrayIdades.filter((idade) => {
    return idade >= 18;
}));

let primeiroMaiorDe30 = arrayIdades
    .filter(idade => idade >= 18)
    .find(numero => numero > 30);

console.log("Primeira idade maior que 30:")
console.log(primeiroMaiorDe30);


console.log("Array dobrado:")
console.log(arrayIdades.map(idade => {
    let supostoAnoNascimento = 2024 - idade;
    return "Supostamente você nasceu em: " + supostoAnoNascimento;
}));

let quantoFaltaPraDezoito = arrayIdades
                                .filter((idade) => idade < 18)
                                .map((idade) => 18 - idade);
console.log("Anos para maioridade:");
console.log(quantoFaltaPraDezoito);

const viuSeteAUm = arrayIdades.map((idade) => {
    if (idade > 10){
        return "Viu 7x1"
    } else{
        return "Não viu 7x1"
    }
})
console.log(viuSeteAUm);

console.log("Alguma idade é maior ou igual a 18?");
console.log(arrayIdades.some(idade => idade >= 18));

console.log("TODAS as idades são maiores ou iguais a 18?")
console.log(arrayIdades.every(idade => idade >= 18));

const array2 = [1,22,31,40,3,5];
const qualMaior = array2.reduce((valor2,valor1) => {
    if (valor1>valor2) {
        return valor1;
    } else {
        return valor2;
    }
});
console.log(qualMaior);

const array = [1, 22, 31, 40, 3, 5];

const maiorValor = array
                    .reduce(
                        (anterior, atual) => (atual > anterior ? atual : anterior));

console.log(`O maior valor é ${maiorValor}`);

