// inputText = document.getElementById("input-text");
// calc = inputText.value;

// function appendDigit(digit) {
//     inputText.value += digit;
// }

// function appendOperator(operator) {
//     inputText.value += operator;
// }

// function calculateResult() {

    

// }

let input = document.getElementById('input-text');
let lastResult = '';
let justCalculated = false;

function appendDigit(digit) {
    if (justCalculated) {
        input.value = '';
        justCalculated = false;
    }
    input.value += digit;
}

function appendOperator(operator) {
    if (justCalculated) {
        justCalculated = false;
    }
    input.value += operator;
}

function clearDisplay() {
    input.value = '';
    lastResult = '';
    justCalculated = false;
}

function calculateResult() {
    try {
        let result = eval(input.value);
        input.value = result;
        lastResult = result;
        justCalculated = true;
    } catch (e) {
        input.value = 'Erro';
        justCalculated = false;
    }
}
