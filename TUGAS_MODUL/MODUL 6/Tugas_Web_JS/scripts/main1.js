// (Kode di scripts/main1.js tetap sama)

let currentInput = '0';
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

const displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.textContent = currentInput;
}

function appendNumber(number) {
    if (waitingForSecondOperand === true) {
        currentInput = number;
        waitingForSecondOperand = false;
    } else {
        if (number === '.' && currentInput.includes('.')) return;
        
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else {
            currentInput += number;
        }
    }
    updateDisplay();
}

function appendOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(firstOperand, inputValue, operator);
        currentInput = `${parseFloat(result.toFixed(5))}`;
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function performCalculation(operand1, operand2, op) {
    switch (op) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                return 'ERROR: Dibagi 0';
            }
            return operand1 / operand2;
        default:
            return operand2;
    }
}

function calculate() {
    const inputValue = parseFloat(currentInput);

    if (operator === null || waitingForSecondOperand) {
        return;
    }

    const result = performCalculation(firstOperand, inputValue, operator);

    if (typeof result === 'string' && result.startsWith('ERROR')) {
        currentInput = result;
    } else {
        currentInput = `${parseFloat(result.toFixed(5))}`;
    }
    
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', updateDisplay);