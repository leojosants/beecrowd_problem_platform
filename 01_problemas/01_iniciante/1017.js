const input = `10
85`;

const lines = input.split('\n');

const [tempoGastoViagem, velocidadeMediaViagem] = lines.map(Number);

const consumoAutomovel = 12;

const distanciaPercorridaCom_12L = (tempoGastoViagem * velocidadeMediaViagem) / consumoAutomovel;

console.log(
    `${distanciaPercorridaCom_12L.toFixed(3)}`
);
