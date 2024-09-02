const input = `3.0 4.0 5.2`;

const lines = input.split('\n');

const dados = lines.shift().trim().split(' ');

const [
    primeiroValor, segundoValor, terceiroValor
] = dados;

const pi = 3.14159;

const calculoAreaTrianguloRetangulo = ((Number(primeiroValor) * Number(terceiroValor)) / 2);

const calculoAreaCirculo = (pi * Math.pow(Number(terceiroValor), 2));

const calculoAreaTrapezio = (1 / 2 * Number(terceiroValor) * (Number(primeiroValor) + Number(segundoValor)));

const calculoAreaQuadrado = (Math.pow(Number(segundoValor), 2));

const calculoAreaRetangulo = (Number(primeiroValor) * Number(segundoValor));

console.log(
    `TRIANGULO: ${calculoAreaTrianguloRetangulo.toFixed(3)}`
);
console.log(
    `CIRCULO: ${calculoAreaCirculo.toFixed(3)}`
);
console.log(
    `TRAPEZIO: ${calculoAreaTrapezio.toFixed(3)}`
);
console.log(
    `QUADRADO: ${calculoAreaQuadrado.toFixed(3)}`
);
console.log(
    `RETANGULO: ${calculoAreaRetangulo.toFixed(3)}`
);