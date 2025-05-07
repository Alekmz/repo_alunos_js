// **4 - Fatorial**

// - Calcular o fatorial do número 5

let numero = 5  
let contador = 1
let fatorial = numero

while(contador < numero){
    fatorial =  fatorial * (numero - contador)
    contador++
}
// Resultado: 5 * 4 * 3 * 2 * 1 
alert("O fatorial de " + numero + " é: " + fatorial )   