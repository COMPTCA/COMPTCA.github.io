var element;													// Declare variables


function charCount(e){											// Declare function
	var textEntered, charDisplay, counter, lastKey;				// Declare variables
	textEntered = document.getElementById('message').value;		// User's text
	charDisplay = document.getElementById('charactersLeft');	// Counter element
	counter = (180 - (textEntered.length));						// Num of chars left
	charDisplay.textContent = counter;							// Show chars left
	
	lastKey = document.getElementById('lastKey');				// Get last key used
	lastKey.textContent = 'Last key on ASCII code: ' + e.keyCode;	// Create msg
}
element = document.getElementById('message');					// Get msg element
element.addEventListener('keypress', charCount, false);			// keypress event