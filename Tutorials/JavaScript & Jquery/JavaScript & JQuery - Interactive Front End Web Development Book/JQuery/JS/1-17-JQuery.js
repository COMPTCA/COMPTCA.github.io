$('li').filter('.hot:last').removeClass('hot');
$('li:not(.hot)').addClass('cool');
$('li').has('em').addClass('complete');

$('li').each(function(){
	if ($(this).is('.hot')){
		$(this).prepend('Priority Item: ');
	}
});

$('li:contains("honey")').append(' (local)');