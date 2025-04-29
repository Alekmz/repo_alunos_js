function gerarCaracterAleatorio() {  
    const caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
    const numeroaleatorio = Math.floor(Math.random() * caracteres.length);  

    return caracteres.charAt(numeroaleatorio);
}

function mostrar(){
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10"))
    let senha = ''
    while(quantidade > 0){
        senha = senha + gerarCaracterAleatorio()
        quantidade = quantidade - 1 
    } 
    alert("A senha é: " + senha)
}
