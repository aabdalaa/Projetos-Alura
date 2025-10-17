// A única coisa que precisamos da página é o 'body'
const body = document.body;

alert("Boas vindas ao meu jogo do número secreto em parceria com a Alura!");

const maxTentativas = 5;
let numsec = 0

while (numsec < 1 || numsec > 100){
    numsec = prompt("Escolha um número de 1 a 100, mas não deixe o outro jogador ver:")
}


let player;
let tentativas = 0;
let acertou = false;

while (tentativas < maxTentativas) {
    tentativas++;
    player = prompt(`Escolha um número entre 1 e 100 (Tentativa ${tentativas} de ${maxTentativas}):`);

    if (numsec == player) {
        acertou = true;
        break;
    } else {
        if (player > numsec) {
            alert(`O número secreto é MENOR que ${player}, tente novamente!`);
        } else {
            alert(`O número secreto é MAIOR que ${player}, tente novamente!`);
        }
    }
}

// Agora, a única tarefa é trocar a imagem de fundo
if (acertou) {
    body.style.backgroundImage = "url('./img/ganhou.png')";
} else {
    body.style.backgroundImage = "url('./img/perdeu.png')";
}