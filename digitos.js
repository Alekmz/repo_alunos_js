// 2. **Contagem de dígitos**
// - O usuário digita um número.
// - Use `while` para contar quantos dígitos ele tem.

let numerodigitado = Number(prompt("Digite um número"))
let digito = 0
let contador = 1

while(contador <= String(numerodigitado).length){
    digito++
    contador++
}
alert("Digitos: " + digito)
