const input = `7 14 106`;

const lines = input.split('\n');

const dados = lines.shift().trim().split(' ');

const [
    primeiroValor, segundoValor, terceiroValor
] = dados;

const pi = 3.14159;

const maior_ab = Math.max(Number(primeiroValor), Number(segundoValor));

const maior_abc = Math.max(maior_ab, Number(terceiroValor));

console.log(
    `${maior_abc} eh o maior`
);