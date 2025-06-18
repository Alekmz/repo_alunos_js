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
//37. Conte as vogais em cada string de um array.

function contarVogais(palavra) { 
    return (palavra.match(/[aeiou]/gi) || []).length 
}
let meuarray = ['palavra', 'teste', 'oi']
console.log(meuarray.map(palavra=> {
    return {
        palavra: palavra,
        vogais: contarVogais(palavra)
    }
}))

// 38. Gere um array com os 10 primeiros números pares.
let pares = Array.from({length: 10}, (_, i) => i * 2);

// 39. Gere um array com os quadrados dos números de 1 a 10.
let quadrados = Array.from({length: 10}, (_, i) => (i+1) ** 2);

// 40. Compare dois arrays e retorne os elementos que existem em ambos.
let arr1 = ['teste', 'palavra', 'qualquer coisa']
let arr2 = ['testando', 'teste', 'palavra', 'programação']
let comuns = arr1.filter(e => arr2.includes(e));

// 41. Faça um array de objetos com nome e nota, e filtre os aprovados (nota ≥ 7).
let alunos = [{nome:'Ana',nota:8},{nome:'João',nota:5}]; 
let aprovados = alunos.filter(a => a.nota >= 7);

// 42. Crie uma função que embaralha os elementos de um array.
let elementosArray = [3,5 ,5,3,2,6,2]
function embaralhar(arr) { 
    return arr.sort(() => Math.random() - 0.5); 
}
embaralhar(elementosArray)


// 43. Verifique se um array está em ordem crescente.

let arr = [1,2,3,4,5,6]
let crescente = arr.every((v, i, a) => !i || a[i-1] <= v);

// 44. Conte quantas strings têm mais de 5 letras em um array.
let arrStrings = ['string1', 'alex', 'teste', 'paralelepipedo']
let count = arr.filter(s => s.length > 5).length;

// 45. Inverta as palavras de cada string de um array.

let invertidas = arrStrings.map(p => p.split('').reverse().join(''));


// 46. Crie um array com os dias da semana e exiba apenas os do fim de semana.
let dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']; 
let fimSemana = dias.filter(d => d === 'Dom' || d === 'Sáb');

// 47. Separe os números negativos e positivos de um array.
let arrNumeros = [-2,4,50, -100, 34]
let positivos = arrNumeros.filter(n => n >= 0); 
let negativos = arrNumeros.filter(n => n < 0);


// 48. Crie uma função que retorna o segundo maior número de um array.
function segundoMaior(arr) { 
    //set para remover os dados duplicados pessoal, sort com o b-a lembram? pra ordenar em order decrescente(do maior para o menor)
    let s = [...new Set(arr)].sort((a,b)=>b-a); 
    return s[1]; 
}

// 49. Conte quantas vezes cada letra aparece em um array de strings.
let stringsArray = ['string1', 'alex', 'teste', 'paralelepipedo']

let texto = stringsArray.join('').toLowerCase(); 
let contagem = {}; 
for (let l of texto) {
    contagem[l] = (contagem[l]||0)+1;
}

// 50. Transforme um array de strings em um array de objetos com { valor: string,
// tamanho: número de caracteres }.
let stringsArray2 = ['string1', 'alex', 'teste', 'paralelepipedo']

let objetos = stringsArray2.map(s => ({ valor: s, tamanho: s.length }));