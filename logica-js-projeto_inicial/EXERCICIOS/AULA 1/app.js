alert("Bem-vindo ao Site da Alura!")
var nome = "lua"
var idade = 25
var numeroDeVendas = 50
var saldoDisponivel = 1000

alert("Preencha todos os campos a seguir!")

var mensagemDeErro = "Erro! Preencha todos os campos!"

var nome = prompt("Qual seu nome?")
var idade = prompt("Qual sua idade?")

if (idade >= 18){
    alert("Pode tirar a habilitação, " + nome)
}

else{
    alert("Não pode tirar a habilitação, " + nome)
}