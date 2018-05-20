var msg = '<p><b>Page Title: </b>' + document.title + '<br/>';
msg += '<b>Page Address: </b>' + document.URL + '<br/>';
msg += '<b>Last Modified: </b>' + document.lastModified + '</p>';

var element = document.getElementById('footer');
element.innerHTML = msg;
