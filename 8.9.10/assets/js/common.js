$(document).ready(function() {
	mobile_menu();
	hideFooter();
})

function mobile_menu() {
	let $toggle = $('#menu-button'),
			$nav = $('#mobile-menu'),
			$navClassName = 'navigation-holder__active'

	$toggle.on('click', function (e) {
		e.preventDefault();
		if ($nav.hasClass($navClassName)) {
			$nav.fadeOut();
			setTimeout(function() {
				$nav.removeClass($navClassName);

			}, 300)

			$(this).text('Показать меню');
		}
		else {
			$nav.hide().addClass($navClassName).fadeIn();
			$(this).text('Свернуть меню');
		}
	});
}

function slowScroll(id) {
	var offset = 0;
	let $nav = $('#mobile-menu'),
			$navClassName = 'navigation-holder__active'

	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	setTimeout(function () {
		$('#mobile-menu').removeClass('navigation-holder__active');
	}, 300);
	return false;
}

 function hideFooter() {
		if ($(window).width() < 940) {
 			$('#footer').hide()
		}
 	}
