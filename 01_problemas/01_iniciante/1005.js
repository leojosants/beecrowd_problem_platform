const lines = [5.0, 7.1];

const [nota_a, nota_b] = lines;

const pesoNota_a = 3.5;
const pesoNota_b = 7.5;

const somaPesos = pesoNota_a + pesoNota_b;

const media = (Number(nota_a) * pesoNota_a + Number(nota_b) * pesoNota_b) / somaPesos;

console.log(`MEDIA = ${media.toFixed(5)}`);
