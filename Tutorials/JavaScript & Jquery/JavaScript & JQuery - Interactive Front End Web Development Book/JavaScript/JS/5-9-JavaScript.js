var sx = document.getElementById('sx');     // Element to hold screenX
var sy = document.getElementById('sy');     // Element to hold screenY
var px = document.getElementById('px');     // Element to hold pageX
var py = document.getElementById('py');     // Element to hold pageY
var cx = document.getElementById('cx');     // Element to hold clientX
var cy = document.getElementById('cy');     // ELement to hod clientY

function showPosition(event){
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var element = document.getElementById('body');
element.addEventListener('mousemove', showPosition, false);
