const calcResult = document.getElementById('result')
const buttons = document.querySelectorAll('button')

const operators = ['+', '-', '×', '÷', '%']


function clean() {
    calcResult.innerHTML = ""
}

function insert(digit) {
    if(calcResult == 0) {
        clean()
    }

    let currentData = calcResult.innerHTML
    calcResult.innerHTML = currentData + digit
}

function backspace() {
    let back = calcResult.innerHTML
    calcResult.innerHTML = back.substring(0, back.length -1)
}

function calculate() {
    let result = calcResult.innerHTML
    let resultAt = ""

    let operatorTrue = false

    let calculation_performed = document.querySelector('.calculation_performed')


    if(result == 0 ) {
        return
    } else if(result.includes('+')) {
        operatorTrue = true
        resultAt = result
    } else if(result.includes('-')) {
        operatorTrue = true
        resultAt = result
    } else if(result.includes('×')) {
        operatorTrue = true
        let operadorPosition = result.indexOf('×')
        let arrayResultAt = result.split('')
        arrayResultAt.splice(operadorPosition, 1, '*')
        resultAt = arrayResultAt.join('')
    } else if(result.includes('÷')) {
        operatorTrue = true
        let operadorPosition = result.indexOf('÷')
        let arrayResultAt = result.split('')
        arrayResultAt.splice(operadorPosition, 1, '/')
        resultAt = arrayResultAt.join('')
    } else if(result.includes('%')) {
        operatorTrue = true
    } else {
        return
    }

    if(operatorTrue == false) return
    calculation_performed.innerHTML = result

    if(operatorTrue == false) {
        return
    }   else {
        return calcResult.innerHTML = eval(resultAt)
    }
    
}

function invertion() {
    if(calcResult.innerHTML > 0) {
        calcResult.innerHTML = `-${calcResult.innerHTML}`
    } else if(calcResult.innerHTML < 0) {
        calcResult.innerHTML = calcResult.innerHTML.slice('1')
    }
}

function fracion() {
    if(calcResult.innerHTML.includes('.') == true) return
    else if(calcResult.innerHTML == "") {
        calcResult.innerHTML = "0."
    } else if(calcResult.innerHTML.length > 0) {
        calcResult.innerHTML = `${calcResult.innerHTML}.`
    }
} 