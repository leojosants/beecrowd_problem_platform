const input = `12 1 5.30
16 2 5.10
`;

const lines = input.split('\n');

const dadosPeca_1 = lines.shift().trim().split(' ');
const [
    codigoPeca_1, numeroPecas_1, valorUnitarioPeca_1
] = dadosPeca_1;
const valorPagarPeca_1 = (Number(numeroPecas_1) * Number(valorUnitarioPeca_1));

const dadosPeca_2 = lines.shift().trim().split(' ');
const [
    codigoPeca_2, numeroPecas_2, valorUnitarioPeca_2
] = dadosPeca_2;
const valorPagarPeca_2 = (Number(numeroPecas_2) * Number(valorUnitarioPeca_2));

const valorPagar = (valorPagarPeca_1 + valorPagarPeca_2);

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);