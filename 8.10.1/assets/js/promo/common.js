$(document).ready(function() {
	mobile_menu();
	window.scrollReveal = new scrollReveal()
})

function mobile_menu() {
	let $toggle = $('#menu-button'),
			$nav = $('#mobile-menu'),
			$navClassName = 'navigation__holder--active'
			$close = $('#close-menu')

	$toggle.on('click', function (e) {
		e.preventDefault();
		$nav.addClass($navClassName)

	});

	$close.on('click', function(e) {
		e.preventDefault();
		$nav.removeClass($navClassName)
	})
}

function slowScroll(id) {
	var offset = 0;
	let $navClassName = 'navigation__holder--active'

	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	$('#mobile-menu').removeClass($navClassName)
	return false;
}
