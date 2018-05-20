var randomNum = Math.floor((Math.random() * 10) + 1)

var element = document.getElementById('info');
element.innerHTML = '<h2>Random Numbers</h2><p>' + randomNum + '</p>';
