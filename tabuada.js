let multiplicador = 1
while(multiplicador <= 5) {
    let multiplicando = 1
    while(multiplicando <=10){
        let resultado = multiplicador * multiplicando
        alert("Taboada do: " + multiplicador + " Multiplicado por: " + multiplicando + " Resultado: " + resultado)
        multiplicando++
    }
    multiplicador++
}