const body = document.body;

alert("Boas vindas ao meu jogo do número secreto em parceria com a Alura!");

const maxTentativas = 5;
let numsec = parseInt(Math.random(50) * 100) + 1

let player;
let tentativas = 0;
let acertou = false;

while (tentativas < maxTentativas) {
    tentativas++;
    player = parseInt(prompt(`Escolha um número entre 1 e 100 (Tentativa ${tentativas} de ${maxTentativas}):`));

    if (numsec == player) {
        acertou = true;
        let pluralten = tentativas > 1 ? 'tentativas' : 'tentativa'
        alert(`Parabéns, você acertou o número secreto ${numsec} com: ${tentativas} ${pluralten}`)
        break;
    } else {
        if (player > numsec) {
            alert(`O número secreto é MENOR que ${player}, tente novamente!`);
        } else {
            alert(`O número secreto é MAIOR que ${player}, tente novamente!`);
        }
    }
}

if (acertou) {
    body.style.backgroundImage = "url('./img/ganhou.png')";
} else {
    body.style.backgroundImage = "url('./img/perdeu.png')";
}