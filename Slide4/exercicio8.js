//Exercício 8: Cálculo de IMC (Índice de Massa Corporal)
const peso = 45
const altura = 1.53
const imc = peso / (altura ** 2)
console.log(`O imc para peso ${peso}kg e altura ${altura}m é: ${imc.toFixed(2)}`)