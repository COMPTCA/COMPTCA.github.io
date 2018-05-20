// Create a new element and store it in a variable
var newElement = document.createElement('li');

// Create a text string and store it in a variable
var newText = document.createTextNode('quinoa');

// Attach the new text string to the inside of the new element
newElement.appendChild(newText);

// Position the new element inside the first ul in the HTML document
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position
position.appendChild(newElement);
