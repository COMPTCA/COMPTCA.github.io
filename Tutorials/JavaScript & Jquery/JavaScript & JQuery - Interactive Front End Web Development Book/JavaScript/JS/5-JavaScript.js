var username, noteName, textEntered, target;        // Declare variables

noteName = document.getElementById('noteName');     // Element that holds note

function writeLabel(e){                             // Declare function
    if (!e){                                        // If event object not present
        e = window.event;                           // Use IE5-8 Fallback
    }
}
target = event.target || event.srcElement;          // Get target of element
textEntered = e.target.value;                       // Value of that element
noteName.textContent = textEntered;                 // Update note text

// This is where the record / pause controls and functions go...

if (document.addEventListener){                     // If event listener supported
    document.addEventListener('click', function(e){ // For any click dcument
        recorderControls(e);                        // Call recorderControls()
    }, false)                                       // Capture during bubble phase
    // If input event fires on username call writeLabel()
    username.addEventListener('input', writeLabel, false);
} else{                                             // Otherwise
    document.attachEvent('onclick', function(e){    // IE fallback: any click
        recorderControls(e);                        // Calls recorderControls()
    });
    // If keyup event fires on username input call writeLabel()
    username.attachEvent('onkeyup', writeLabel, false);
}
