//assim ele adiciona e depois coloca em ordem
let num = [5, 8, 9, 3, 2]
num.push(7)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçõs`)
console.log(`O primeiro vetor é o ${num[0]}`)
let pos = num.indexOf(1)
if(pos == -1) {
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor 8 esta na posição ${pos}`)
}

/* assim ele coloca em ordem e adiciona nesse caso o 7 em último

let num = [5, 8, 9, 3, 2]
num.sort()
num.push(7)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçõs`)
console.log(`O primeiro vetor é o ${num[0]}`)
*/ 