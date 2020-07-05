var nav_parent = $('#navigation'),
		nav_trigger = $('#trigger')

$(document).ready(function() {

	nav_trigger.click(function () {
		nav_parent.removeClass('navigation')
		nav_parent.addClass('navigation--active animated fadeIn')
		setTimeout(function(){
			nav_parent.removeClass('fadeIn')
		}, 500)
		
	})
	$('#close-menu').click(function() {
		nav_parent.addClass('fadeOut')
		setTimeout(function () {
			nav_parent.removeClass('navigation--active fadeOut fadeIn animated')
		}, 500)
		nav_parent.addClass('navigation')
		
	})


	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$('.header').addClass('header--scrolling')
			//$('.article-title').css('marginTop', 50 + 'px')
		}
		else {
			$('.header').removeClass('header--scrolling')
			//$('.article-title').css('marginTop', 0)
		}
	})

	setInterval(function() {
		$('.navigation__item:hover:after').css('display', 'none')
		setTimeout(function() {
			$('.navigation__item:hover:after').css('display', 'inline-block')
		}, 100)
	}, 500)



})

function slowScroll(id) {
	var offset = 100;

	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	$('#mobile-menu').removeClass('navigation-holder__active')
	return false;
}
