console.log("Seja-bem vindo!")

let nome = "André Abdala"
console.log(`Olá ${nome}, seja-bem vindo!`)

alert(`Olá ${nome}, seja-bem vindo!`)

let ling = prompt("Qual sua linguagem de programação favorita?")
console.log(ling)

let valor1 = prompt("Digite um número:")
let valor2 = prompt("Digite outro número:")
let subtracao = Number(valor1) - Number(valor2)
let soma = Number(valor1) + Number(valor2)
console.log(`A soma de ${valor1} + ${valor2} = ${soma}`)
console.log(`A subtração de ${valor1} - ${valor2} = ${subtracao}.`)

idade = parseInt(prompt("Digite sua idade:"))
if (idade >= 18){
    console.log(`Você tem ${idade} anos, então você é MAIOR de idade`)
} else{
    console.log(`Você tem ${idade} anos, então você é MENOR de idade`)
}

let numero = prompt("Digite um número:")
if (numero > 0){
    alert(`Seu número digitado ${numero} é positivo!`)
} else if (numero == 0){
    alert(`Seu número digitado ${numero} é zero!`)
} else{
    alert(`Seu número digitado ${numero} é negativo!`)
}


let loop = 0
while (loop < 11){
    alert(loop)
    loop += 1
}
alert("Terminou!")

let nota = prompt("Qual sua nota ?")
if (nota > 7){
    console.log(`Parabéns, você tirou ${nota} está com uma nota boa!`)
} else if (nota == 7){
    console.log(`Você passou na média com a nota ${nota}, cuidado com sua nota!`)
} else{
    console.log(`Você tirou ${nota} e foi reprovado!`)
}

mr1 = parseInt(Math.random()*1000)
console.log(mr1)

mr1 = parseInt(Math.random()*100)
console.log(mr1)

mr1 = parseInt(Math.random())
console.log(mr1)