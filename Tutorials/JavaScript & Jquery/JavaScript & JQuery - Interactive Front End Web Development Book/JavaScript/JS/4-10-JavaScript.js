// Get first list item
var firstItem = document.getElementById('one');

// If it has class attribute
if (firstItem.hasAttribute('class')){
    // Get the attribute
    var attr = firstItem.getAttribute('class');

    // Add the value of the attribute after the list
    var element = document.getElementById('scriptResults');
    element.innerHTML = '<p>The first item has a class name of: ' + attr + '</p>';
}
