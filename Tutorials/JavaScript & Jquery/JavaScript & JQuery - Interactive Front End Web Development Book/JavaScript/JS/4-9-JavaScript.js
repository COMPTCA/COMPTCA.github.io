// Select the element to remove
var removeElement = document.getElementsByTagName('li')[3];

// Select the element's containing element
var containerElement = removeElement.parentNode;

// Remove the element
containerElement.removeChild(removeElement);
