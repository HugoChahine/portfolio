$(document).ready(function() {
	$('.scrollTo').click(function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
		return false;
	});
});


ScrollToTop=function() {
	var s = $(window).scrollTop();
	if (s > 800) {
		$('.scrollTop').fadeIn();
	} else {
		$('.scrollTTop').fadeIn();
	}

	$('.scrollTop').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
}

StopAnimation=function() {
	$("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
		$('html, body').stop();
 	});
}

$(window).scroll(function() {
	ScrollToTop();
	StopAnimation();
})(jQuery);