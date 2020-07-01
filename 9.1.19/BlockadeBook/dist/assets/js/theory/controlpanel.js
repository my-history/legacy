$(document).ready(function () {

	$theme = 'light'
	$basefontsize = 10
	if ($('#dark-theme-styles').attr('href') != "") {
		$theme = 'dark'
	}

	//Trigger behaivor
	
	$('[data-controller="controllers-trigger"]').on('click', function (e) {
		e.preventDefault();
		$('[data-controller="controllers-trigger"]').toggleClass('control-panel__trigger--active');
		$('[data-controller="controllers-set"]').toggleClass('controllers--active');
	});

	//ChangeTheme button behaivor

	$('[data-controller="change-theme"]').on('click', function() {
		if ($theme == 'dark') {
			$('#dark-theme-styles').attr('href', '')
			$('[data-controller="change-theme"] i').addClass('fa-moon')
			$('[data-controller="change-theme"] i').removeClass('fa-sun')
			$theme = 'light'
		}
		else {
			$('#dark-theme-styles').attr('href', 'assets/css/darktheme.css')
			$('[data-controller="change-theme"] i').removeClass('fa-moon')
			$('[data-controller="change-theme"] i').addClass('fa-sun')
			$theme = 'dark'
		}
	})

	//UpsizeFont button behaivor

	$('[data-controller="inc-font"]').on('click', function() {
		fontChange('html, body', 2)
	})

	//DownsizeFont button behaivor

	$('[data-controller="dec-font"]').on('click', function () {
		fontChange('html, body', -2)
	})

})

function fontChange(element, step) {
	step = parseInt(step, 10);
	var el = $(element);
	var elfz = el.css('fontSize')
	var curFont = parseInt(elfz, 10);
	var font = parseInt(curFont + step)
	el.css('fontSize', font+'px');
}
