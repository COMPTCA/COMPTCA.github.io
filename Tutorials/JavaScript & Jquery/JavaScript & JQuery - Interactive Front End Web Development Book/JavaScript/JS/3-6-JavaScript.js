var pass = 50; // Passing grade
var score = 75; // Current score
var msg; // Message

// Select message based on score
if (score >= pass){
    msg = 'Congratulations, you passed!';
} else{
    msg = 'Have another go!';
}

var element = document.getElementById('answer');
element.textContent = msg;
