const input = `500 
35.0`;

const lines = input.split('\n');

const [
    distanciaTotalPercorrida, totalCombustivelGasto
] = lines;

const consumoMediaAutomovel = (Number(distanciaTotalPercorrida) / Number(totalCombustivelGasto));

console.log(
    `${consumoMediaAutomovel.toFixed(3)} km/l`
);