function showMenu() {
	$('[data-script-role="nav"]').addClass('is-active Navigation--themeIvanovo');
}

function hideMenu() {
	$('[data-script-role="nav"]').removeClass('is-active Navigation--themeIvanovo')
}

$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
		$('.Header').addClass('is-scrolling')
		$('.Title.Title--articleTitle.first').addClass('u-paddingTopBottom200')
	} else {
		$('.Header').removeClass('is-scrolling')
		$('.Title.Title--articleTitle.first').removeClass('u-paddingTopBottom200')
	}
})
