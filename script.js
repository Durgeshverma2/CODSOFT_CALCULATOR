let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if ('+-*/'.includes(lastChar)) return;
  currentInput += operator;
  display.value = currentInput;
}

function calculate() {
  try {
    display.value = eval(currentInput);
    currentInput = display.value;
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
}
function clearDisplay() {
  currentInput = '';
  display.value = '';
}
function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}
function squareRoot() {
  try {
    const result = Math.sqrt(eval(currentInput));
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
}
function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if ('+-*/'.includes(lastChar)) return;
  currentInput += operator;
  display.value = currentInput;
}



function square() {
  try {
    const result = Math.pow(eval(currentInput), 2); 
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
}
