const lines = [5.0, 6.0, 7.0];

const [nota_a, nota_b, nota_c] = lines;

const pesoNota_a = 2;
const pesoNota_b = 3;
const pesoNota_c = 5;

const somaPesos = pesoNota_a + pesoNota_b + pesoNota_c;

const media = (Number(nota_a) * pesoNota_a + Number(nota_b) * pesoNota_b + Number(nota_c) * pesoNota_c) / somaPesos;

console.log(`MEDIA = ${media.toFixed(1)}`);
