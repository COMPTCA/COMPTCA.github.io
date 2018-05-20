$(function(){
    $('ul').before('<p class="notice">Just Updated</p>');
    $('li.hot').prepend('+ ');
    var newListItem = $('<li><em>Gluton-Free</em> Soy Sauce</li>');
    $('li:last').after(newListItem);
});
