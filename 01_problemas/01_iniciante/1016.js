const input = `30`;

const lines = input.split('\n');

const [distancia] = lines.map(Number);

const calculoTempo = (distancia * 2);

console.log(
    `${calculoTempo} minutos`
);