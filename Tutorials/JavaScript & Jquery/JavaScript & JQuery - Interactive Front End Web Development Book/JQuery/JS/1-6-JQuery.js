$(function(){
    $('li:contains("Pine")').text('Almonds');
    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
})
