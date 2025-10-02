alert("Boas vindas ao meu jogo do número secreto em parceria com a Alura!");
let numsec = 29;
let player = prompt("Escolha um número entre 1 e 100");

if (numsec == player) {
    console.log("Parabéns, você acertou o número secreto!")
}
else{
    console.log("Número incorreto, tente novamente!")
}