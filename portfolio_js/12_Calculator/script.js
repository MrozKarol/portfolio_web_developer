const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaintingNextVale = false;

function sendNumberValue(number) {
  // Replace current value if first value entered

  if (awaintingNextVale) {
    calculatorDisplay.textContent = number;
    awaintingNextVale = false;
  } else {
    // If current dispaly value is 0, replace it, if not add number
    const dispalyValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      dispalyValue === '0' ? number : dispalyValue + number;
  }
}

function addDecimal() {
  // If operator pressed, dont add decimal
  if (awaintingNextVale) return;
  // If the current value does not contain a fraction, add a decimal
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
  '=': (firstNumber, secondNumber) => secondNumber,
};

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Prevent multiple operators
  if (operatorValue && awaintingNextVale) {
    operatorValue = operator;
    return;
  }
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    // console.log(firstValue, operatorValue, currentValue);
    const calculation = calculate[operatorValue](firstValue, currentValue);
    // console.log('calculation', calculation);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  }
  // ready for next store operator
  awaintingNextVale = true;
  operatorValue = operator;
}

// Add Eevent Liseners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

// Reset all value display

function resetAll() {
  firstValue = 0;
  operatorValue = '';
  awaintingNextVale = false;
  calculatorDisplay.textContent = '0';
}
//Eevent Liseners

clearBtn.addEventListener('click', resetAll);
