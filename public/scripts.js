const calcResult = document.getElementById('result')

function insert(digit) {
    let currentData = calcResult.innerHTML
    calcResult.innerHTML = currentData + digit
}

function clean() {
    calcResult.innerHTML = ""
}

function backspace() {
    let back = calcResult.innerHTML
    calcResult.innerHTML = back.substring(0, back.length -1)
}

function calculate() {
    let result = calcResult.innerHTML
    if(result) {
        calcResult.innerHTML = eval(result)
    }
}