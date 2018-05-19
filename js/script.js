

//1.array of JavaScript objects to hold the data for the quotes.
var quotes = [
  {
    quote: "The good times of today, are the sad thoughts of tomorrow",
    source: "Bob Marley",
    tag: "Reflection"
  },
  {
    quote: "Who, being loved, is poor?",
    source: "Oscar Wilde",
    citation: "A Woman of No Importance",
    year: 1893,
    tag: "Inspirational"
  },
  {
    quote: "No man has a good enough memory to be a successful liar",
    source: "Abraham Lincoln",
    tag: "Reflection"
  },
  {
    quote: "There is some good in this world, and it’s worth fighting for",
    source: "J.R.R. Tolkien",
    citation: "The Two Towers",
    year: 1954,
    tag: "Reflection"
  },
  {
    quote: "There is nothing either good or bad but thinking makes it so",
    source: "William Shakespeare",
    tag: "Reflection"
  },
  {
    quote: "Travel far enough, you meet yourself",
    source: "David Mitchell",
    citation: "Cloud Atlas",
    tag: "Inspirational"
  },
  {
    quote: "All endings are also beginnings. We just don’t know it at the time.",
    source: "Mitch Albom",
    citation: "The Five People You Meet In Heaven",
    tag: "Inspirational"
  },
  {
    quote: "It’s no use going back to yesterday, because I was a different person then.",
    source: "Lewis Carroll",
    citation: "Alice’s Adventures in Wonderland",
    year: 1865,
    tag: "Inspirational"
  },
  {
      quote: "Not all those who wander are lost.",
      source: "J.R.R. Tolkien",
      citation: "The Fellowship of the Ring",
      year: 1954,
      tag: "Reflection"
  }
];

//2.Create a function named getRandomQuote and returns randomly quote.
function getRandomQuote( ) {
  var randomNumber =  Math.floor( Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

/*3. Create a function named printQuote which:
- calls the getRandomQuote function and stores the returned object.
- constructs a string containing the innerHTML
- if conditions (citation and year).
- display the final html string.
*/
function printQuote () {
var selectedQuote = getRandomQuote();
var html = "<p class= 'quote'>" + selectedQuote.quote + "</p>";
    html += "<p class= 'source'>" + selectedQuote.source;
    if ( selectedQuote.citation !== undefined ) {
      html += "<span class= 'citation'>" + selectedQuote.citation + "</span>";
    }
    if ( selectedQuote.year !== undefined ) {
      html += "<span class= 'year'>" + selectedQuote.year + "</span>";
    }
    html += "<p class= 'tag'>" + selectedQuote.tag;
    html += "</p>";
  document.getElementById('quote-box').innerHTML = html;
}
printQuote();

//function to get the random background color.
function randomRGB() {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.bgColor = rgbColor;
}
randomRGB();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", randomRGB, false);

//Quotes change automatically each 10 seconds.
setInterval("window.location.reload()", 10000);
