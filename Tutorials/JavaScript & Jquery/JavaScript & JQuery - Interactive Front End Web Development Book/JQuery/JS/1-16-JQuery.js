$(function(){
	$('ul').hide();
	$('h2').append('<a class="show">show</a>');
	
	$('h2').on('click', function(){
		$('h2').next('ul')
			.fadeIn(500)
			.children('.hot')
			.addClass('complete');
		$('h2').find('a').fadeOut();
	});
});