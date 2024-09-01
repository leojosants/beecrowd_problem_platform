const lines = [5, 6, 7, 8];

const [
    primeiroValor, segundoValor, terceiroValor, quartoValor
] = lines;

const diferenca = (primeiroValor * segundoValor - terceiroValor * quartoValor);

console.log(`DIFERENCA = ${Math.floor(diferenca)}`);
