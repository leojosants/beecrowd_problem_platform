const input = `3`;

const lines = input.split('\n');

const [raio] = lines;

const pi = 3.14159;

const calculoVolumeEsfera = ((4 / 3.0) * pi * Math.pow(Number(raio), 3));

console.log(`VOLUME = ${calculoVolumeEsfera.toFixed(3)}`);