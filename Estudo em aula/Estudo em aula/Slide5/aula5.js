//Estruturas condicionais

//if — condição simples
let velocidade = 60 
if (velocidade > 80) {
    console.log("Você foi multado")
}

//if / else — dois caminhos
let idade = 25
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

//if / else if — múltiplos caminhos
idade = 15
if (idade < 10) {
    console.log("Não pode entrar")
} else if (idade >= 10 && idade < 18) {
    console.log("Pode entrar acompanhado")
} else {
    console.log("Pode entrar sozinho")
}

//switch — valores fixos
const fruta = "banana"
switch (fruta) {
case "banana":
console.log("R$ 3,00 / kg")
break
case "maçã":
console.log("R$ 2,00 / kg")
break
default:
console.log("Produto não existe no estoque")
}

//Ternário — relembrando
let num = 2;
let resultado = (num % 2 == 0) ? "Par" : "Ímpar";
console.log(resultado); 
//EQUIVALENTE USANDO IF/ELSE 
// let resultado;
// if (num % 2 == 0) {
// resultado = "Par";
// } else {
//     resultado = "Ímpar";
//}

//Estruturas de Repetição

//for — quando você sabe quantas vezes
