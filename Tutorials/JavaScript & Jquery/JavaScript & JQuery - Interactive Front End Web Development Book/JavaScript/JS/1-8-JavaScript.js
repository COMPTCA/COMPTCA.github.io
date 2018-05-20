// Create the array
var colors = ['white', 'black', 'custom'];

// Update the thirs item in the array
colors[2] = 'beige';

// Get the element with an id of colors
var element = document.getElementById('colors');

// Replace with third item from the array
element.textContent = colors[2];
