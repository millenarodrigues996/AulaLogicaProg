//Exercício 6: Verificação de Acesso
const usuarioLogado = true
const temPermissaoAdmin = false
const podeAcessarAdmin = usuarioLogado && temPermissaoAdmin
console.log("O usuário pode acessar a admin?" , podeAcessarAdmin)