// 2. **Contagem de pares e ímpares**
//     - De 1 até 10, mostre se o número é par ou ímpar.
//     - Use um `while` externo com um número e um interno para verificar se o número é divisível por 2.
let contador = 1
while(contador <= 10){
    let resto = contador % 2
    if(resto === 0) alert("Número: " + contador + " é Par")
    else alert("Número: " + contador + " é Impar")
    contador++
}