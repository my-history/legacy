var nav_parent = $('#navigation'),
		nav_trigger = $('#trigger')

$(document).ready(function() {

	nav_trigger.click(function () {
		showMenu();
		
	})
	$('#close-menu').click(function() {
		closeMenu();
		
	})


	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
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

	// $('.control-panel').on('click', function (e) {
	// 	e.preventDefault();
	// 	$('.control-panel__trigger').toggleClass('control-panel__trigger--active');
	// 	$('.controllers').toggleClass('controllers--active');
	// });

})

function closeMenu() {
	// nav_parent.addClass('fadeOut');
	// setTimeout(function () {
	// 	nav_parent.removeClass('navigation--active fadeOut fadeIn animated');
	// }, 1000);
	nav_parent.removeClass('navigation--active')
	nav_parent.addClass('navigation');
}

function showMenu() {
	nav_parent.removeClass('navigation');
	nav_parent.addClass('navigation--active');
	// setTimeout(function () {
	// 	nav_parent.removeClass('fadeIn');
	// }, 1000);
}

function slowScroll(id) {
	var offset = 100;

	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	$('#mobile-menu').removeClass('navigation-holder__active')
	return false;
}
