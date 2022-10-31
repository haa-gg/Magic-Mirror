//Wrap everything in a function because... well them's the rules!
function glenToDo() {

  //Make a call to the mighty Google Sheets API and pray for a response
  /*The way this call works is really cool! You can check out the details of what each bit of the URL-thing below is doing at: https://developers.google.com/sheets/api/guides/concepts 
  Sidenote: if you copy + paste the URL below into your browser you can see the array in a totally useless but kinda interesting way (no viruses, pinky swear!)*/
  var json = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1SiztiruV1t3-VAlLzBucewVlQOcobkADM4MuF0U-8CM/values/'Sheet1'/?key=AIzaSyA1T4CcA8nnxMfxShN7Blrinr9y7LL5CzY", function(json) {

    //Response granted, no need to light any more incense!
    /*Got the whole JSON object from the API call in a single variable called 'json'. Below we are setting up some ground rules for what I'll be keen to know about going forward, in specific I'll be needing to know how many rows are in the sheet which I get from json.values.length so I hook that value to the variable 'y' */
    // console.log (json.values[0][0]);
    // console.log (json.values.length);

    var quote = ~~(Math.random()*json.values.length);
    // console.log (typeof quote);
    // console.log ("Array quote " + json.values[quote][1]);
       //Reset quote values on each run of the function
       $('.quote').prepend("<p>" + json.values[quote][0] + "</p>");
       $('.author').prepend("<p>- " + json.values[quote][1] + "</p>");
  //$('.quote').text = json.values[1][0];


//text split portion
const target = document.querySelectorAll('body .quote')[0];

const val = target.textContent;

console.log(val);

const chars = val.split('');

target.innerHTML = chars.map(c => `<span class="char">${c}</span>`).join('');
});
}

//Equivalent to hitting the play button on my big ol' music box!
glenToDo();

