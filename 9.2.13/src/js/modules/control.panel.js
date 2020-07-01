$(document).ready(function() {
	var theme = Cookies.get('theme')
	var fontsize = parseInt(Cookies.get('basefontsize'))
	$themedElements = [
		'body',		
		'.Header',
		'.Header-title',
		'.Header-logo',
		'.Header-navigationTrigger',
		'.BB',
		'.ControlPanel-trigger',
		'.ControlPanel-buttons div',
		'.ImageBlock'
		
	]
	$el = '.Content'
	if (theme == 'dark') {
		setDarkTheme()
	}
	if (theme == 'light' || theme == undefined) {
		setLightTheme()
	}
	setFontSize($el, fontsize)

})

	$('[data-controller="controllers-trigger"]').on('click', function (e) {
		e.preventDefault();
		$('[data-controller="controllers-trigger"]').toggleClass('is-active');
		$('[data-controller="controllers-set"]').toggleClass('is-active');
	});

	$('[data-controller="default-styles"]').click(function (e) {
		setLightTheme()
		setFontSize($el, 10)
		$('[data-controller="controllers-trigger"]').toggleClass('is-active');
		$('[data-controller="controllers-set"]').toggleClass('is-active');

	})

	$('[data-controller="change-theme"]').on('click', function () {
		var currentTheme = Cookies.get('theme')
		if (currentTheme == 'light') {
			setDarkTheme()
		} else {
			setLightTheme()
		}
	})

	$('[data-controller="inc-font"]').on('click', function () {
		fontChange('html, body', 2)
	})

	$('[data-controller="dec-font"]').on('click', function () {
	fontChange('html, body', -2)
	})

	function fontChange(element, step) {
		step = parseInt(step, 10);
		var elfz = $(element).css('fontSize')
		var curFont = parseInt(elfz, 10);
		var font = parseInt(curFont + step)
		Cookies.set('basefontsize', font)
		$(element).css('fontSize', font + 'px');
	}

	function setDarkTheme() {
		$('[data-controller="change-theme"] i').removeClass('fa-moon')
		$('[data-controller="change-theme"] i').addClass('fa-sun')
		Cookies.set('theme', 'dark')

		for (var i = $themedElements.length - 1; i >= 0; i--) {
			$($themedElements[i]).addClass('Theme--dark')
		}
	}

	function setLightTheme() {
		$('[data-controller="change-theme"] i').addClass('fa-moon')
		$('[data-controller="change-theme"] i').removeClass('fa-sun')
		Cookies.set('theme', 'light')

		for (var i = $themedElements.length - 1; i >= 0; i--) {
			$($themedElements[i]).removeClass('Theme--dark')
		}
	}

	function setFontSize(el, fz) {
		$(el).css('fontSize', fz)
		Cookies.set('basefontsize', fz)
	}
