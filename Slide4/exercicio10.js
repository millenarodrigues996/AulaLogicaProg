//Exercício 10: Cálculo de Juros Simples
const capitalInicial = 1500
const taxaDeJuros = 0.07
const tempoDeAplicacao = 12
const montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)
console.log(`Após ${tempoDeAplicacao} meses, o montante será de R$ ${montante.toFixed(2)}`)