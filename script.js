let display = document.getElementById('display');
let calculation = '';

function appendNumber(number) {
    calculation += number;
    display.value = calculation;
}

function appendOperator(operator) {
    calculation += operator;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = '';
}

function calculate() {
    try {
        calculation = eval(calculation);
        display.value = calculation;
    } catch (error) {
        display.value = 'Error';
    }
}
