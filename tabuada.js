// 1. **Tabuada do 1 ao 5**
//     - Mostre a tabuada de 1 até 5.
//     - Use dois `while`: um para o número base (de 1 a 10) e outro para o multiplicador (de 1 a 10).

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