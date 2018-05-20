// querySelector() only returns the first match
var element = document.querySelector('li.hot');
element.className = 'cool';

//querySelector() returns a NodeList
// the second matching element (the third list item) is selected and changed
var elements = document.querySelectorAll('li.hot');
elements[1].className = 'cool';
