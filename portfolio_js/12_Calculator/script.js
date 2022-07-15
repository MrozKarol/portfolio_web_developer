const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
  // If current dispaly value is 0, replace it, if not add number
  const dispalyValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    dispalyValue === '0' ? number : dispalyValue + number;
}

// Add Eevent Liseners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }
});

// Reset display

function resetAll() {
  calculatorDisplay.textContent = '0';
}
//Eevent Liseners

clearBtn.addEventListener('click', resetAll);
