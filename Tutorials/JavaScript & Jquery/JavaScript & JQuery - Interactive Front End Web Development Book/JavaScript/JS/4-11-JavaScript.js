// Get the first list item
var firstItem = document.getElementById('one');
// Change its class attribute
firstItem.className = 'complete';

// Get the fourth list item
var fourthItem = document.getElementsByTagName('li').item(3);
// Add an attribute to it
fourthItem.setAttribute('class', 'cool');
