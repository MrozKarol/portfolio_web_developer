const imputContainer = document.getElementById('input-conteiner');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let counntdownDate = '';

//Set Date Input Min with Today's Date

const today = new Date().toISOString().split('T')[0];
console.log(today);

dateEl.setAttribute('min', today);

//Take Values from Form Inout

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  counntdownDate = e.srcElement[1].value;
  console.log(counntdownDate, countdownTitle);
}

//Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
