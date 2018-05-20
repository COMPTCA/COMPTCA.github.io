var element = document.getElementById('username');          // Username input
var elementMsg = document.getElementById('feedback');       // Element to hold message

function checkUsername(){                                   // Declare function
    var username = element.value;                           // Store username in variable
    if (username.length < 5){                               // If username < 5 characters
        elementMsg.className = 'warning';                   // Change class on message
        elementMsg.textContent = 'Not long enough, yet...'; // Update message
    } else{                                                 // Otherwise
        elementMsg.textContent = '';                        // Clear the message
    }
}

function tipUsername(){                                     // Declare function
    elementMsg.className = 'tip';                           // Change class for message
    elementMsg.textContent = 'Username must be at least 5 characters';  // Add message
}

// When the username input gains / loses focus call functions above:
element.addEventListener('focus', tipUsername, false);      // On focus call tipUsername()
element.addEventListener('blur', checkUsername, false);     // On blur call checkUsername()
