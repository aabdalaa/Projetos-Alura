let num = 0

while (num <= 9){
    num++
    alert(`CONTAGEM ${num}`)
}

while (num >= 1){
    num--
    alert(`CONTAGEM ${num}`)
}

let n1 = parseInt(prompt("Digite um número:"))
let n2 = 0

while (n2 != n1){
    alert(`CONTAGEM USUÁRIO: ${n1}`)
    if (n1 > n2){
        n1 --
    }
    else{
        n1 ++
    }
}
alert(`CONTAGEM USUÁRIO: ${n2}`)

let n3 = parseInt(prompt("Digite outro número:"))
let n4 = 0 

while (n3 != n4){
    alert(`CONTAGEM USUÁRIO: ${n4}`)
    if (n4 > n3){
        n4 --
    }
    else{
        n4 ++
    }
}
alert(`CONTAGEM USUÁRIO: ${n4}`)