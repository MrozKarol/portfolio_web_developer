const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');
const completeEl = document.getElementById('complete');
const completeInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

let countdownTitle = '';
let counntdownDate = '';
let countdownValue = Date;
let countdownAactive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Set Date Input Min with Today's Date

const today = new Date().toISOString().split('T')[0];
console.log(today);

dateEl.setAttribute('min', today);

//Populate Countdown / Complete UI
function updateDOM() {
  countdownAactive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);
    // Hide Input
    inputContainer.hidden = true;

    // If the countdown has ended, show comlete
    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownAactive);
      completeInfo.textContent = `${countdownTitle} finished on ${counntdownDate}`;
      completeEl.hidden = false;
    } else {
      // Else, show the countdown in progress
      countdownElTitle.textContent = `${countdownTitle}`;
      timeElements[0].textContent = `${days}`;
      timeElements[1].textContent = `${hours}`;
      timeElements[2].textContent = `${minutes}`;
      timeElements[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countdownEl.hidden = false;
    }
  }, second);
}

//Take Values from Form Inout
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  counntdownDate = e.srcElement[1].value;
  console.log(counntdownDate, countdownTitle);
  // Check for valid date
  if (counntdownDate === '') {
    alert('Please select a date for the countown');
  } else {
    //   Get number version of current Date,updateDOM
    countdownValue = new Date(counntdownDate).getTime();
    console.log(countdownValue);
    updateDOM();
  }
}

// Reset All Values

function reset() {
  // Hide Countdowns, show Input
  completeEl.hidden = true;
  inputContainer.hidden = false;
  // Show Countdown
  countdownEl.hidden = true;

  // Stop the countdown
  clearInterval(countdownAactive);
  // Reset values
  countdownTitle = '';
  counntdownDate = '';
}

//Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);
