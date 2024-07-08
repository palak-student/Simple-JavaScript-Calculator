function clearDisplay() {
    document.calc.display.value = '';
}

function deleteChar() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.calc.display.value += value;
}

function calculate() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
        document.calc.display.value = 'Error';
    }
}
