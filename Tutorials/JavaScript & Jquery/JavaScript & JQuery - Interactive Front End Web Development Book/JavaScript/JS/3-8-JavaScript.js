var scores = [75, 90, 99];         // Array of scores
var arrayLength = scores.length;    // Number of items in array
var roundNumber = 0;                // Current round number
var msg = '';                       // Message
var i;                              // Counter

// Loop through the items in the array
for (i = 0; i < arrayLength; i++){
    // Arrays are zero based (so 0 is round 1)
    // Add 1 to the current round
    roundNumber = (i + 1);

    // Write the current round number to the message
    msg += 'Round ' + roundNumber + ': ';

    // Get the score from the scores array
    msg += scores[i] + '<br/>';
}

document.getElementById('answer').innerHTML = msg;
