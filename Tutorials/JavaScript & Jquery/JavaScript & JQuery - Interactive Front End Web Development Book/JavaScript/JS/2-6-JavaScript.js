var msg = '<h2>Browser Window</h2><p>Width: ' + window.innerWidth + '</p><p>Height: ' + window.innerHeight + '</p>';
msg += '<h2>History</h2><p>Items: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2><p>Width: ' + window.screen.width + '</p><p>Height: ' + window.screen.height + '</p>';

var element = document.getElementById('info');
element.innerHTML = msg;
