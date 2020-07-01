'use strict'

function showMenu() {
	$('[data-script-role="nav"]').addClass('is-active Navigation--themeIvanovo');
}

function hideMenu() {
	$('[data-script-role="nav"]').removeClass('is-active Navigation--themeIvanovo')
}

function test(name) { 
	alert('hello' + name)
}

$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
		$('.Header').addClass('is-scrolling')
	} else {
		$('.Header').removeClass('is-scrolling')
	}
})
