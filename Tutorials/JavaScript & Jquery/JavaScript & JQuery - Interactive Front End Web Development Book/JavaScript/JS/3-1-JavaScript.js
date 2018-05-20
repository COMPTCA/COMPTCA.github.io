var pass = 50;  // Pass mark
var score = 90; // Score

// Check if the user has passed
var hasPassed = score >= pass;

var element = document.getElementById('answer');
element.textContent = 'Level passed: ' + hasPassed;
