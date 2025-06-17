// 13. Filtre os números pares de um array com .filter().
let numeros = [23,3,5,6,4,2,55,90,45,40,30,20,10]

let numerosPares = numeros.filter(numero => numero % 2 === 0)

let numerosImpares = numeros.filter(numero => numero % 2 !== 0)

console.log(numerosPares)
console.log(numerosImpares)

// 15. Encontre o maior número de um array.
let numeros2 = [23,3,5,6,4,2,55,90,45,40,30,20,10]
let maiorNumero = Math.max(...numeros2)
console.log(maiorNumero)
//16. Encontre o menor número de um array.
let menorNumero = Math.min(...numeros2)
console.log(menorNumero)

//18. Junte dois arrays em um só usando .concat() ou spread [...].
let array1 = ['teste', 'teste2']
let array2 = ['teste3', 'teste4']
let arrayJuntao = [...array1, ...array2]

console.log(arrayJuntao)

//19. Ordene um array de strings em ordem alfabética.

let palavras = ['casa', 'banana', 'abacate']; 
palavras.sort();

console.log(palavras)

//20. Ordene um array de números do maior para o menor.
let numeros3 = [10, 20 ,1000 ,90 ,50 ,60]
let numeros3Desc = []
console.log(numeros3Desc)
numeros3.sort((a,b)=> b-a)
console.log(numeros3)

// 21. Remova valores duplicados de um array.
let valores = ['Alex', 'Alex', 'João', 'João', 'Claudia', 'Maria']
let removerDuplicados = new Set([...valores])
let novoArray = [...removerDuplicados]
console.log(novoArray)

let arraySemDuplicados = []
for(let i=0; i< valores.length; i++){
    if(!arraySemDuplicados.includes(valores[i])){
        arraySemDuplicados.push(valores[i])
    }
}
console.log(arraySemDuplicados)

//22. Conte quantas vezes um valor aparece em um array.
let valores2 = ['Alex', 'Alex', 'João', 'João', 'Claudia', 'Maria']
let contador= 0
for(let i=0; i< valores.length; i++){
    if(valores2[i] == 'Alex'){
       contador++
    }
}
let quantasVezesApareceAlex = valores2.filter(valor=> valor === 'Alex').length
console.log(contador, quantasVezesApareceAlex)

// 23. Transforme todos os itens do array em uma única string separada por vírgulas com .join().
let usuarios = ['Alex', 'Joana', 'Carlos', 'João', 'Claudia', 'Maria']
console.log(usuarios.join(', '))

// 24. Substitua todas as ocorrências de "banana" por "maçã" em um array.
let frutas = ['Abacaxi', 'Laranja', 'Kiwi', 'Banana', 'Banana', 'Maçã']
let frutasNovo = frutas.map(fruta => fruta === 'Banana' ? 'Maçã' : fruta)
console.log(frutasNovo)

// 25. Encontre o índice de um valor específico com .indexOf().
let frutas2 = ['Abacaxi', 'Laranja', 'Kiwi', 'Caqui', 'Banana', 'Maçã']
console.log(frutas.indexOf('Kiwi'))

// 26. Crie um novo array contendo apenas as strings de um array com tipos mistos.
let mistos = ['Abacaxi', 'Laranja', 34, 322, {nome:'Alex', idade:22}]
let strings = mistos.filter(valor=> typeof valor === "string")
console.log(strings)

//27. Coloque a primeira letra de cada palavra em maiúscula.
let palavras2 = ['teste', 'seila', 'qualquer', 'coisa']
let palavrasMaiusculo = palavras2.map((palavra)=> {
    let [primeira, ...restante] = palavra
    console.log(primeira, restante)
    let novaletra = primeira.toUpperCase() 
    return novaletra + restante.join('')
})
console.log(palavrasMaiusculo)

//28. Verifique se todos os elementos são números com .every().
let elementos = [3, 4,5,6,7,8]
let saonumeros = elementos.every(elemento => typeof elemento === "number")
console.log(saonumeros)

//29. Verifique se ao menos um número é maior que 100 usando .some().
let elementos2 = [33, 45,500,6,7,8]
let teste = elementos2.some(elemento => elemento > 100)
console.log(teste)


//30. "Achatamento": transforme um array com subarrays em um único array plano (um nível só).
let arraydearray = [34, 434, [342, 3, 656,4], [2, [45,34, [344,343]]]]
let arrays = arraydearray.flat(3)
console.log(arrays)

// 32. Crie uma função que recebe um array de números e retorna a média.

let notas = [5,6,7,8]
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual)=> acumulador += atual ,0)
    return soma/array.length
}
console.log(calcularMedia(notas))

//34. Rotacione os elementos de um array uma posição para a direita.
function rotacionar(array) { 
    array.unshift(array.pop()); 
    return array; 
}
console.log(rotacionar(notas))