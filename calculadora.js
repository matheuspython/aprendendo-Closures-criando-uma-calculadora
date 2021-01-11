function operador(operador = '+') {
    return function(numero1, numero2) {
        if (operador == '+') return numero1 + numero2
        if (operador == '-') return numero1 - numero2
        if (operador == '/') return numero1 / numero2
        if (operador == '*') return numero1 * numero2
    }
}




const soma = operador('+')

const subtrai = operador('-')

const multiplica = operador('*')

const divide = operador('/')




//testes

console.log(soma(2, 1))

console.log(subtrai(2, 1))

console.log(multiplica(2, 1))

console.log(divide(2, 1))