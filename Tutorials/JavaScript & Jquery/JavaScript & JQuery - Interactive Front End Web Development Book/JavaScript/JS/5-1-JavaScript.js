function checkUserName(){                                                   // Declare function
    var elementMsg = document.getElementById('feedback');                   // Get feedback element
    var elementUsername = document.getElementById('username');              // Get username input
    if (elementUsername.value.length < 5){                                  // If username is too short
        elementMsg.textContent = 'Username must be 5 characters or more';   // Set message
    } else{                                                                 // Otherwise
        elementMsg.textContent = '';                                        // Clear Message
    }
}

document.getElementById('username').onblur = checkUserName();               // On blur call function
