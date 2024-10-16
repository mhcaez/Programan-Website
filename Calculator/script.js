let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let result = 0;

function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay(currentInput);
}

function inputOperator(op) {
    if (currentInput === '') return;
    operator = op;
    result = parseFloat(currentInput);
    currentInput = '';
    updateDisplay('0');
}

function calculate() {
    if (currentInput === '' || operator === '') return;

    let secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result += secondOperand;
            break;
        case '-':
            result -= secondOperand;
            break;
        case '*':
            result *= secondOperand;
            break;
        case '/':
            result /= secondOperand;
            break;
        case '%':
            result %= secondOperand;
            break;
        case '**':
            result **= secondOperand;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentInput = result.toString();
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = 0;
    updateDisplay('0');
}

function updateDisplay(value) {
    display.textContent = value;
}
