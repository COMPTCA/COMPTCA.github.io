var firstItem = document.getElementById('one'); // Find first List Item

var showTextContent = firstItem.textContent;    // Get value of textContent
var showInnerText = firstItem.innerText;        // Get value of innerText

// SHow the content of these twp properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';

var element = document.getElementById('scriptResults');
element.innerHTML = msg;

firstItem.textContent = 'sourdough bread';      // Update the first list item
