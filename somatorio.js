// 3. **Simulador de somatório com pares**
//     - Some apenas os números pares de 1 até 20.
//     - Use `while` com condição `if` para verificar se é par antes de somar.
let contador = 1
let somatorio = 0
while(contador <= 20){
    let resto = contador % 2
    if(resto == 0){
        somatorio = somatorio + contador
        alert("O número " + contador + 
        " é par e o somatorio é " + somatorio)
    }
    contador++

}
alert("A soma dos números pares de 1 a 20 é :" + somatorio)