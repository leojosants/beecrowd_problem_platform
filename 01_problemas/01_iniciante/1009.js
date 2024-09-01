const lines = ['JOAO', 500.00, 1230.30];

const [
    vendedorNome, vendedorSalarioFixo, vendedorVendasEfetuadasMes
] = lines;

const comissao = (vendedorVendasEfetuadasMes * 0.15);

const totalReceberMes = (Number(vendedorSalarioFixo) + comissao);

console.log(`TOTAL = R$ ${Number(totalReceberMes).toFixed(2)}`);
