const quoteContainer = document.getElementById('quote-conteiner');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//2 Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Check if Aauthor field is black and replace it with "Unkonown"
  // console.log(quote.author);
  authorText.textContent = quote.author ? quote.author : 'Unkonown';

  // Check Quote lenght to determine styling
  quote.text.length > 120
    ? quoteText.classList.add('long-quote')
    : quoteText.classList.remove('long-quote');
  quoteText.textContent = quote.text;
}

//1 Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const respone = await fetch(apiUrl);
    apiQuotes = await respone.json();
    // console.log(apiQuotes[121]);
    newQuote();
  } catch (error) {
    //   Catch Error Here
  }
}

//4 Tweet Quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
};

//5 Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//3 On Load
getQuotes();
