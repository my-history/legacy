$(document).ready(function() {
	var theme = Cookies.get('theme')
	var fontsize = parseInt(Cookies.get('basefontsize'))
	$el = 'html, body'
	$darkthemeurl = 'assets/css/darktheme.css'
	if (theme == 'dark') {
		setDarkTheme($darkthemeurl)
	}
	if (theme == 'light' || theme == undefined) {
		setLightTheme()
	}
	setFontSize($el, fontsize)

})

	$('[data-controller="controllers-trigger"]').click(function (e) {
		e.preventDefault();
		$('[data-controller="controllers-trigger"]').toggleClass('control-panel__trigger--active');
		$('[data-controller="controllers-set"]').toggleClass('controllers--active');
	});

	$('[data-controller="default-styles"]').click(function (e) {
		setLightTheme()
		setFontSize($el, 10)
	})

	$('[data-controller="change-theme"]').on('click', function () {
		var currentTheme = Cookies.get('theme')
		if (currentTheme == 'light') {
			setDarkTheme($darkthemeurl)
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

	function setDarkTheme(dtulr) {
		$('#dark-theme-styles').attr('href', dtulr)
		$('[data-controller="change-theme"] i').removeClass('fa-moon')
		$('[data-controller="change-theme"] i').addClass('fa-sun')
		Cookies.set('theme', 'dark')
	}

	function setLightTheme() {
		$('#dark-theme-styles').attr('href', '')
		$('[data-controller="change-theme"] i').addClass('fa-moon')
		$('[data-controller="change-theme"] i').removeClass('fa-sun')
		Cookies.set('theme', 'light')
	}

	function setFontSize(el, fz) {
		$(el).css('fontSize', fz)
		Cookies.set('basefontsize', fz)
	}
