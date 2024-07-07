const prompt = require('prompt-sync')({sigint: true});

let primeiroValor = parseFloat (prompt ('Digite o primeiro valor: '))
let operador = prompt ('Digite o operador: ')
let segundoValor = parseFloat (prompt ('Digite o segundo valor: '))

    
function calculadora (primeroValor, segundoValor, operador) {

    switch (operador) {

    case "+": 
    return primeroValor + segundoValor
    break;

    case "-":
    return primeroValor - segundoValor
    break;

    case "*":
    return primeroValor * segundoValor
    break;

    case "/":
        if (segundoValor === 0) {
            console.log("O número que você digitou é zero.");
        } else if (segundoValor % 0 === 0) {
            console.log("O número é divisível por zero.");
        } else {
            console.log("O número não é divisível por zero.");
        }

    case "%":
        return primeiroValor % segundoValor    
    }
        return "Operador inválido"
         
}

console.log(calculadora(primeiroValor, segundoValor, operador))
process.exit()

