var subtotal = (13 + 1) * 5; // Subtotal is 70
var shipping = 0.5 * (13 + 1); // Shipping is 7
var total = subtotal + shipping; // Total is 77

var elementSub = document.getElementById('subtotal');
elementSub.textContent = subtotal;

var elementShip = document.getElementById('shipping');
elementShip.textContent = shipping;

var elementTotal = document.getElementById('total');
elementTotal.textContent = total;
