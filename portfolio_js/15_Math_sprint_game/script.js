// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');
// Countdown Page
const countdown = document.querySelector('.countdown');
// Game Page
const itemContainer = document.querySelector('.item-container');
// Score Page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

// Equations
let questionAmount = 0;
let equationsArray = [];
let playerGuessArray = [];
let bestScoreArray = [];

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// Time
let timer;
let timePlayed = 0;
let baseTime = 0;
let penaltyTime = 0;
let finalTime = 0;
let finalTimeDisplay = '0.0';

// Scroll
let valueY = 0;

//Get the value from selected radio button
function getRadioValue() {
  let radioValue;
  radioInputs.forEach((radioInputs) => {
    if (radioInputs.checked) {
      radioValue = radioInputs.value;
    }
  });
  return radioValue;
}
//Dispays 3,2,1, GO!
function countdownStart() {
  countdown.textContent = '3';
  setTimeout(() => {
    countdown.textContent = '2';
  }, 1000);
  setTimeout(() => {
    countdown.textContent = '3';
  }, 2000);
  setTimeout(() => {
    countdown.textContent = '1';
  }, 2000);
  setTimeout(() => {
    countdown.textContent = 'GO';
  }, 3000);
}

// Navigate from Splash Page to Countdown Page
function showCountDown() {
  countdownPage.hidden = false;
  splashPage.hidden = true;
  countdownStart();
}

//Form that decides amount of questions
function selecteQuestionAmount(e) {
  e.preventDefault();
  questionAmount = getRadioValue();
  console.log(questionAmount);
  if (questionAmount) {
    showCountDown();
  }
}

startForm.addEventListener('click', () => {
  // Remove Selectet Label Styling
  radioContainers.forEach((radioEl) => {
    radioEl.classList.remove('selected-label');
    if (radioEl.children[1].checked) {
      radioEl.classList.add('selected-label');
    }
  });
});

startForm.addEventListener('submit', selecteQuestionAmount);
