let num = [5, 8, 2, 9, 3]
num.push(1) //adicionar antes de ordenar
//num.sort() função que coloca os vetores em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor informado não foi encontrado.`) //quando o valor não existe na array
} else {
console.log(`O valor informado está na posição ${pos}.`)
}
