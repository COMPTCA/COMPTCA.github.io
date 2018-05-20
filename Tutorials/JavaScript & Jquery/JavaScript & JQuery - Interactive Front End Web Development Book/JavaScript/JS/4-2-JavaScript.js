var elements = document.getElementsByClassName('hot'); // Find hot items

if (elements.length > 2){       // If 3 or more are found
    var element = elements[2]; // Select the third one from the NodeList
    element.className = 'cool'; // Change the value of its class attribute
}
