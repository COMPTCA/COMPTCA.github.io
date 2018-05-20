var table = 3;                  // Units in table
var operator = 'Addition';      // Type of calculation (defaults to addition)
var i = 1;                      // Set counter to 1
var msg = '';                   // Message

if (operator === 'addition'){   // If the operator variable says addition
    while (i < 11){             // While counter is less than 11
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>';   // Calculation
        i++;                    // Add 1 to the counter
    }
} else{                         // Otherwise
    while (i < 11){             // While counter is less than 11
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>';   // Calculation
        i++;                    // Add 1 to the counter
    }
}

// Write the message into the page
document.getElementById('blackboard').innerHTML = msg;
