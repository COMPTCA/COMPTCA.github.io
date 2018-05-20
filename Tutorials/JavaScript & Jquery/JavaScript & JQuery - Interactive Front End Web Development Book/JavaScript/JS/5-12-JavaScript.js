var elList, addLink, newEl, newText, counter, listItems;    // Declare variables

elList  = document.getElementById('list');                  // Get list
addLink = document.querySelector('a');                      // Get add item button
counter = document.getElementById('counter');               // Get item counter

function addItem(e){                                        // Declare function
    e.preventDefault();                                     // Prevent link action
    newEl = document.createElement('li');                   // New <li> element
    newText = document.createTextNode('New list item');     // New text string
    newEl.appendChild(newText);                             // Add text to <li>
    elList.appendChild(newEl);
}

function updateCount(){
    listItems = elList.getElementsByTagName('li').length;      // Get total of <li>s
    counter.textContent = listItems;
}

addLink.addEventListener('click', addItem, false);          // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated
