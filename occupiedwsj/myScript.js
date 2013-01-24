

$(document).ready(function(){
    	$('.container').hover(function(){
        $(this).children('.works').stop().fadeTo(200, 0.8);
    	},function(){
        $(this).children('.works').stop().fadeTo(200, 0);
    	});
	});