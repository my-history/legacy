function showMenu() {
	$('[data-script-role="nav"]').addClass('is-active Navigation--themeIvanovo');
}

function hideMenu() {
	$('[data-script-role="nav"]').removeClass('is-active Navigation--themeIvanovo')
}

$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
		$('.Header').addClass('is-scrolling')
		//$('.article-title').css('marginTop', 50 + 'px')
	} else {
		$('.Header').removeClass('is-scrolling')
		//$('.article-title').css('marginTop', 0)
	}
})
