// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Cole';
var message = ', please check your order:';
//Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element with an id of greeting
var elementgreeting = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
elementgreeting.textContent = welcome;


// Get the element that has an id of userSign and then update its contents
var elementSign = document.getElementById('userSign');
elementSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elementTiles = document.getElementById('tiles');
elementTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elementTiles = document.getElementById('subTotal');
elementTiles.textContent = '$' + subTotal;



// Get the element that has an id of shipping then update its contents
var elementTiles = document.getElementById('shipping');
elementTiles.textContent = '$' + shipping;



// Get the element that has an id of grandTotal then update its contents
var elementTiles = document.getElementById('grandTotal');
elementTiles.textContent = '$' + grandTotal;
