//Wrap everything in a function because... well them's the rules!
function mirrorQuote() {

  //Make a call to the mighty Google Sheets API and pray for a response
  /*The way this call works is really cool! You can check out the details of what each bit of the URL-thing below is doing at: https://developers.google.com/sheets/api/guides/concepts 
  Sidenote: if you copy + paste the URL below into your browser you can see the array in a totally useless but kinda interesting way raw JSON data looks (no viruses, pinky swear!)*/
  var json = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1SiztiruV1t3-VAlLzBucewVlQOcobkADM4MuF0U-8CM/values/'Sheet1'/?key=AIzaSyA1T4CcA8nnxMfxShN7Blrinr9y7LL5CzY", function(json) {

//Quotes are cool and all but they get stale after being on the screen for a bit, the lines below remove the currently displayed quote with
$('.quote span').remove();
$('.author p').remove();

    //Response granted, no need to light any more incense!
    /*We set the variable "quote" to a randomly selected JSON value from the response JSON object*/
    var quote = ~~(Math.random()*json.values.length);
       //Reset quote values on each run of the function

       $('.quote').prepend("<p>" + json.values[quote][0] + "</p>");
       $('.author').prepend("<p>- " + json.values[quote][1] + "</p>");


//Text split portion
//Set the text-splitting target to the element with a class of "quote"
const target = document.querySelectorAll('body .quote')[0];

//This value of "val" is set to specifically focus on the text nestled inside this object
const val = target.textContent;

//This is a damn funky operation in javascript, exact details here:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//What it's doing is breaking up whatever string is passed to it and breaking it into new values based by on a specified divider, in this case '' which translates to "every independent character"
//Sidenote: there's a section on the link above that's rather fascinating about emojis-- are those considered a grouping of characters or a unique character? 
const chars = val.split('');

//Modify our inner property of the quote so that every letter/character is wrapped in in a span with a class of "char"
target.innerHTML = chars.map(c => `<span class="char">${c}</span>`).join('');

});
}

//Equivalent to hitting the play button on my big ol' music box once per minute!
mirrorQuote();
setInterval(mirrorQuote, 60000);

