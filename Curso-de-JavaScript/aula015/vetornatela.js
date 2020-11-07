let valores = [4, 6, 1, 8, 9]
valores.sort()
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem os valores ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`a posição ${pos} tem os valores ${valores[pos]}`)
} 