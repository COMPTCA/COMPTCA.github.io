var score1 = 80;    // Round 1 score
var score2 = 80;    // Round 2 score
var pass1 = 60;     // Round 1 passing score
var pass2 = 60;     // Round 2 passing score

// Check whether the user passed both rounds, store result in variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Create message
var msg = 'Both rounds passed: ' + passBoth;

// Write out the message into the page
var element = document.getElementById('answer');
element.textContent = msg;
