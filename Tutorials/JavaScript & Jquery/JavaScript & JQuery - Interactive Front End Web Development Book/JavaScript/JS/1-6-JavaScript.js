var inStock;
var shipping;

inStock = true;
shipping = false;

inStock = false;
shipping = true;

var elementStock = document.getElementById("stock");
elementStock.className = inStock;

var elementShipping = document.getElementById("shipping");
elementShipping.className = shipping;
