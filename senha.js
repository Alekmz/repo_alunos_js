// 3. **Leitura de 3 senhas com tentativas**
//     - O usuário tem até 3 tentativas para digitar a senha correta (ex: "1234").
//     - Dentro de cada tentativa, verifique se a senha é igual e exiba mensagens.
let senha = "Alex123"
let tentativas = 1
let acertou = false
while(tentativas <= 3 && acertou === false){
    let senhatentativa = prompt("Digite sua senha: ")
    if(senha === senhatentativa){
        alert("Senha correta, usuário logado!")
        acertou = true
    } else{
        let tentativassobrando = 3 - tentativas
        alert("Senha incorreta! Você tem mais: " + tentativassobrando + " Tentativas" )
    }
    tentativas++
}
if(acertou === false) alert("Conta bloqueada!")
else alert("Você está dentro do sistema!")