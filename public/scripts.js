const calcResult = document.getElementById('result')
const buttons = document.querySelectorAll('button')


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

function operations(result) {
    if(result.includes("×")) {
        let realCalculation = ""
        let operation = "*"
        let indexMultiplication = result.indexOf('×')
        realCalculation = result.splice(indexMultiplication, 1, "*")
        return realCalculation
    } else if(result.includes("÷")) {
        let operation = "/"
        let indexDivision = result.indexOf("÷")
        realCalculation = result.splice(indexDivision, 1, "/")
        return realCalculation
    } return 
}

function calculate() {
    let result = calcResult.innerHTML
    let calculation_performed = document.querySelector('.calculation_performed')
    calculation_performed.innerHTML = result

    let realCalculation = ""
    operations(result)

    if(result) {
        calcResult.innerHTML = eval(result)
    }
    calcResult.innerHTML 
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