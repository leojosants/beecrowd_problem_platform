const lines = [25, 100, 5.50];

const [
    funcionarioNumero, funcionarioNumeroHorasTrabalhadas, funionarioValorRecebidoPorHora
] = lines;

const funcionarioSalario = (funcionarioNumeroHorasTrabalhadas * funionarioValorRecebidoPorHora);

console.log(`NUMBER = ${Number(funcionarioNumero)}`);
console.log(`SALARY = U$ ${Number(funcionarioSalario).toFixed(2)}`);
