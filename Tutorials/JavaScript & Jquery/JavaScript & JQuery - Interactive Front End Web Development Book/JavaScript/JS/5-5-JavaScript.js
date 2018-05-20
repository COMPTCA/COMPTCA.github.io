function checkLength(e, minLength){                     // Declare function; e = event
    var element, elementMsg;                            // Declare variables
    if (!e){                                            // If event object doesn't exist
        e = window.event;                               // Use IE fallback
    }
    element = e.target || e.srcElement;                 // Get target of event
    elementMsg = element.nextSibling;                   // Get its next sibling

    if (element.value.length < minLength){              // If length is too short set msg
        elementMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else{
        elementMsg.textContent = '';
    }
}

var elementUsername = document.getElementById('username');  // Get username input
if (elementUsername.addEventListener){                      // If event listener supported
    elementUsername.addEventListener('blur', function(e){
        checkLength(e, 5);
    }, false);
} else{
    elementUsername.attachEvent('onblur', function(e){
        checkLength(e, 5);
    });
}
