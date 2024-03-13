/* 
Desafio 2
*/

function verificaFib(num) {
    let a = 0
    let b = 1

    while (b <= num) {
        if (b === num) {
            return true
        }

        const temp = b
        b = a + b
        a = temp
    }

    return false
}

const numVerificado = 49

if (verificaFib(numVerificado)) {
    console.log(`${numVerificado} pertence à sequência de Fibonacci.`)
} else {
    console.log(`${numVerificado} não pertence à sequência de Fibonacci.`)
}