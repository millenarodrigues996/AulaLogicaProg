const diaDaSemana = 4
let nomeDia
switch (diaDaSemana) {
    case 1:
    nomeDia = "Segunda-Feira"
   break
    case 2:
    nomeDia = "Terça-Feira"
    break
    case 3:
    nomeDia = "Quarta-Feira"
    break
    case 4:
    nomeDia = "Quinta-Feira"
    break
    case 5:
    nomeDia = "Sexta-Feira"
    break
    case 6:
    nomeDia = "Sábado"
    break
    case 7:
    nomeDia = "Domingo"
    break
    default:
        nomeDia= "Dia inválido :("
}

console.log(`O dia é: ${nomeDia}`)