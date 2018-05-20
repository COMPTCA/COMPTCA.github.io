var today = new Date();
var year = today.getFullYear();

var element = document.getElementById('footer');
element.innerHTML = '<p>Copyright &copy;' + year + '</p>';
