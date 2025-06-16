let nomes = ["João", "Clara", "Jonas", "Carla", "Maria", "Alessandro", "Carlos", "José"]
console.log(nomes[10])
console.log(nomes.length)
nomes.forEach((element, index) => 
    {
        console.log(element + "@globmail.com" )
    }
);

nomesComSobrenome = nomes.map((nome) => {
   return nome + " da Silva"
})

let nomesFiltrados = nomes.filter((nome) => nome.length > 5) 
let findNome = nomes.find((nome) => nome.length > 5) 
console.log(findNome)










// 12 
let numeros = [10, 20, 30, 40, 50 , 60, 70, 80, 90, 100]

console.log('Array invertido', numeros.reverse())

let numerosDois = numeros.map(elemento=>elemento*2) 
console.log(numeros)
console.log(numerosDois)

//14
let soma = numeros.reduce((acumulado, valoratual) => acumulado+valoratual)
console.log(soma)

let nomes2 = ["João", "Clara", "Jonas", "Carla", "Maria", "Alessandro", "Carlos", "José"]
let nomesvirgula = 
nomes2.reduce((acumulado, valoratual)=> acumulado + ", " + valoratual)

console.log(nomesvirgula)



let numerosdois = [10, 20, 30, 40, 50 , 60, 70, 80, 90, 100]

let numerosinvertido = numerosdois.map((elemento, index)=>{
    let tamanhoarray = numerosdois.length - 1
    return numerosdois[tamanhoarray - index]
})

console.log(numerosinvertido)