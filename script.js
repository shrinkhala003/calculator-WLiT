let outputscreen = document.getElementById('display');
let Inputstring = '';
let Operationtype = null;
let previousInput = '';

function appendNumber(number) {
    Inputstring += number;
    outputscreen.value = Inputstring;
}

function appendOperation(operation) {
    if (Inputstring === '' && operation !== '.') return;

    if (Inputstring !== '') {
        previousInput += Inputstring;
    }

    previousInput += operation;
    Inputstring = '';
    outputscreen.value = previousInput;
}

function clearDisplay() {
    Inputstring = '';
    previousInput = '';
    outputscreen.value = '';
}

function calculateResult() {
    try {
        previousInput += Inputstring;
        let result = eval(previousInput);
        outputscreen.value = result;
        Inputstring = '';
        previousInput = '';
    } catch (error) {
        outputscreen.value = 'Error';
    }
}
