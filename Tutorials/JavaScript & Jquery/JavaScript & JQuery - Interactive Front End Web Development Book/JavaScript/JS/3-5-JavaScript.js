var score = 75;     // Score
var msg;            // Message

if (score >= 50) {
    // If score is 50 or higher
    msg = 'Congratulations!';
    msg += ' Proceed to the next round.';
}

var element = document.getElementById('answer');
element.textContent = msg;
