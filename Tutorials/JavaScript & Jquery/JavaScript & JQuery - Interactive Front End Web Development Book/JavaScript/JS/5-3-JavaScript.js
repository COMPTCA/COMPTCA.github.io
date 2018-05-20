var elementUsername = document.getElementById('username');                      // Get username input
var elementMsg = document.getElementById('feedback');                       // Get feedback element
function checkUserName(minLength){                                                       // Declare function
    if (elementUsername.value.length < minLength) {                                                // If username is too short
        elementMsg.textContent = 'Username must be ' + minLength + ' characters or more';       // Set msg
    } else{                                                                     // Otherwise
        elementMsg.textContent = '';                                            // Clear message
    }
}

// When it loses focus call getUserName()
elementUsername.addEventListener('blur', function(){
    checkUserName(5);
}, false);
