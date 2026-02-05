
function calcular(operacao) {
    const number1 = Number(document.getElementById('number1').value)
    const number2 = Number(document.getElementById('number2').value)
    const result = document.getElementById('result')

    if (isNaN(number1) || isNaN(number2)) {
        result.innerText = 'Resultado: Preencha os dois números'
        return
    }

    let resultadoFinal

    if (operacao === '+') {
        resultadoFinal = number1 + number2
    } else if (operacao === '-') {
        resultadoFinal = number1 - number2
    } else if (operacao === '*') {
        resultadoFinal = number1 * number2
    } else if (operacao === '/') {
        if (number2 === 0) {
            result.innerText = 'Resultado: Não é possível dividir por zero'
            return
        }
        resultadoFinal = number1 / number2
    }

    result.innerText = `Resultado: ${resultadoFinal}`
}


function limpar() {
    document.getElementById('number1').value = ''
    document.getElementById('number2').value = ''
    document.getElementById('result').innerText = 'Resultado:'
    document.getElementById('number1').focus()
}
