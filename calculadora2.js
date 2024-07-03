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
    return primeroValor / segundoValor
    break;

    case "%":
        return primeiroValor % segundoValor    
    }
        return "Operador inválido"
         
}

console.log(calculadora(primeiroValor, segundoValor, operador))
process.exit()

