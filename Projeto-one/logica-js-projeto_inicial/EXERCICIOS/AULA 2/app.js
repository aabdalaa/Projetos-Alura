var dia = prompt("Qual é o dia da semana? ");

if (dia === "sábado" || dia === "domingo" || dia === "dumingo" || dia == "sabado") {
  alert("Bom final de semana!");
} 
else {
  alert("Boa semana!");
}

var num = prompt("Digite um número:");

if (num < 0){
    alert(`Seu número ${num}, é negativo!`);
}
else if (num == 0){
    alert("Seu número é zero!");
}
else {
    alert(`Seu número ${num}, é positivo!`);
}

alert("Agora, vamos jogar um jogo!");

var numesc = 99;

var game = prompt("Jogue um número, ele tem que ser maior que um número escolhido");

if (game > numesc){
    alert("Você ganhou o jogo!");
}
else{
    alert("Tente novamente para ganhar!");
}

let saldo = prompt("Digite qual o saldo da sua conta:");

alert(`O valor disponível do seu saldo é de: R$ ${saldo}`);

let nome = prompt("Agora digite o seu nome:");

alert(`Seja bem-vindo, ${nome} !`);