function checkUserName(){                                                       // Declare function
    var elementMsg = document.getElementById('feedback');                       // Get feedback element
    if (elementUsername.value.length < 5) {                                                // If username is too short
        elementMsg.textContent = 'Username must be 5 characters or more';       // Set msg
    } else{                                                                     // Otherwise
        elementMsg.textContent = '';                                            // Clear message
    }
}

var elementUsername = document.getElementById('username');                      // Get username input
// When it loses focus call getUserName()
elementUsername.addEventListener('blur', checkUserName, false);
