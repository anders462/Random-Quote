//quote array
var quotes = ["There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.@Unknown","Because it's there.@George Mallory on climbing mountains","Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.@Winnie the Pooh's A-Z","For I know the plans that I have for you.@The Lord, Jer 29:11","The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.@Royal Robbins","Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown","The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein","We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot","One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'@Proverb","It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.@Dag Hammarskjold, Sec. Gen. of the UN","Maps are a way of organizing wonder.@Edward Tufte","I have decided to make my life my argument.@Albert Schweitzer","Now it's a sqirt mecca for mystery artist, but back then it was just magic.@Jim Snyder on Kayaking","Knowledge keeps about as well as fish.@Alfred North Whitehead","It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.@Norman Cousins, Anatomy of an Illness","Do not go gentle into that good night.  Rage, rage against the dying of the light.@Dylan Thomas","For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.@John Stone, Gaudeamus Igitur"];

//assign var the div object
var theQuote = document.getElementById("quote");
var theAuthor = document.getElementById("author");
//assign var the button object
var theButton = document.getElementById("btn1")

// define event handler for button 1 click
    theButton.onclick = function gen(){
      // Delete old quote
      while (theQuote.firstChild){
        theQuote.removeChild(theQuote.firstChild);
      }
       while (theAuthor.firstChild){
        theAuthor.removeChild(theAuthor.firstChild);
      }
      // Generate new quote
      generateQuote();
    };

    function generateQuote() {
        var randomPos = Math.floor(Math.random()*quotes.length);
        var fullRandomQuote = quotes[randomPos];
        var atPos = fullRandomQuote.indexOf("@");
        var randomQuote = fullRandomQuote.slice(0,atPos-1);
        var author = fullRandomQuote.slice(atPos+1,fullRandomQuote.length);
        var newQuote = document.createTextNode('"'+ randomQuote +'"'); //create text element
       var newAuthor = document.createTextNode(author); //create text element
        theQuote.appendChild(newQuote); // append text to div
        theAuthor.appendChild(newAuthor); // append text to div

    }
