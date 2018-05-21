// The following script will not work locally - only on a server

var xhr = new XMLHttpRequest();											// Create XMLHttpRequest object

xhr.onload = function(){												// When response has loaded
	// The following conditional check will not work locally - only on a server
	if (xhr.status === 200){											// If server status was ok
		document.getElementById('content').innerHTML = xhr.responseText;// Update
	}
};

xhr.open('GET', '../Data/6-1-Data.html', true);							// Prepare request
xhr.send(null);															// Send request
