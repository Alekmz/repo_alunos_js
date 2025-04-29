function gerarCaracterAleatorio() {  
    const caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        abcdefghijklmnopqrstuvwxyz
                        0123456789`
    const numeroaleatorio = Math.floor(Math.random() * caracteres.length);  

    return caracteres.charAt(numeroaleatorio);
}
function mostrar(){
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 5"))

    if(quantidade == 1){
        alert("Senha: " 
        + gerarCaracterAleatorio())
    } else if(quantidade == 2) {
        alert("Senha: " 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio())
    } else if(quantidade == 3) {
        alert("Senha: " 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio())
    } else if(quantidade == 4) {
        alert("Senha: " 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio())
    } else if(quantidade == 5) {
        alert("Senha: " + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio() 
        + gerarCaracterAleatorio())
    }
}