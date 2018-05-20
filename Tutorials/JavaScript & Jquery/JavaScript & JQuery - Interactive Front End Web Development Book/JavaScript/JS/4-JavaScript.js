// Adding items to the start and end of the list
// Get the <ul> element
var list = document.getElementsByTagName('ul')[0];

// Add new item to the start of the list
// Create <li> element
var newItemFirst = document.createElement('li');
// Create text string
var newTextFirst = document.createTextNode('kale');
// Add text string to <li> element
newItemFirst.appendChild(newTextFirst);
// Add <li> element to start of  list
list.insertBefore(newItemFirst, list.firstChild);

// Add new item to the end of the list
// Create element
var newItemLast = document.createElement('li');
// Create text string
var newTextLast = document.createTextNode('cream');
// Add text string to the <li> element
newItemLast.appendChild(newTextLast);
// Add <li> element to end of list
list.appendChild(newItemLast);



// Get all <li> elements
var listItems = document.querySelectorAll('li');

// Add a class of cool to all list items
// Counter variable
var i;
// Loop through all <li> elements
for (i = 0; i < listItems.length; i++){
    // Change their class to cool
    listItems[i].className = 'cool';
}

// Add nummber of items in the list to the heading
// <h2> element
var heading = document.querySelector('h2');
// <h2> element text
var headingText = heading.firstChild.nodeValue;
// Number of <li> elements
var totalItems = listItems.length;
// Content
var newHeading = headingText + '<span>' + totalItems + '</span>';
// Update <h2> element content
heading.innerHTML = newHeading;
