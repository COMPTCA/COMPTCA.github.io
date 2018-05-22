var vote = '<div id="vote"><div class="third"><a href="PHP/vote.php?vote=gray"><img src="Images/t-gray.png" id="gray" alt="gray"/></a></div><div class="third"><a href="PHP/vote.php?vote=gray" id="yellow"><img src="Images/t-yellow.png" id="yellow" alt="yellow"/></a></div><div class="third"><a href="PHP/vote.php?vote=gray"><img src="Images/t-green.png" id="green" alt="green"/></a></div></div>';
$('#selector').append(vote);

$('#selector a').on('click', function(e) {
  	e.preventDefault();
  	var queryString = 'vote=' + $(e.target).attr('id');
  	$.get('PHP/votes.php', queryString, function(data){
    	$('#selector').html(data);
  	});
});
