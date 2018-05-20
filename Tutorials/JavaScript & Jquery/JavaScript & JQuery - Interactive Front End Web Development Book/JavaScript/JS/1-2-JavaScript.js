var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var element = document.getElementById("cost");
element.textContent = "$" + total;
