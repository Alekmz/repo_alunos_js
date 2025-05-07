// Jogo do número secreto com dica: “maior” ou “menor”.
let numero_secreto = Math.floor(Math.random() * 5)
console.log(numero_secreto)
let numero_usuario = 0

while(numero_secreto !== numero_usuario){
    numero_usuario = Number(prompt("Digite um número"))
    if(numero_usuario === numero_secreto) {
        alert("Parabéns, você acertou!")
    }
    else if(numero_usuario < numero_secreto) {
        alert("O número que você digitou é menor!")
    }
    else if(numero_usuario > numero_secreto)
    {
        alert("O número que você digitou é maior!")
    }
    else{
        alert("Erro")
    }
}
