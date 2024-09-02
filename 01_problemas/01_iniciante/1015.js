const input = `1.0 7.0
5.0 9.0`;

const lines = input.split('\n');

const eixo_x = lines.shift().trim().split(' ').map(Number);
const eixo_y = lines.shift().trim().split(' ').map(Number);

const [x1, y1] = eixo_x;
const [x2, y2] = eixo_y;

const calculo_x = Math.pow(x2 - x1, 2);
const calculo_y = Math.pow(y2 - y1, 2);

const distancia = Math.sqrt(calculo_x + calculo_y, 2);

console.log(
    distancia.toFixed(4)
);