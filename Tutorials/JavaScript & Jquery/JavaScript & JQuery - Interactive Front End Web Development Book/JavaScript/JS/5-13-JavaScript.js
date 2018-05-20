function setup(){
    document.getElementById('message').focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event){
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;
}, false);
