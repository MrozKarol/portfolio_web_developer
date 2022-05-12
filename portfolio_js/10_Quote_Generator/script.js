let apiQuotes = [];

//2 Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
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

//3 On Load
getQuotes();
