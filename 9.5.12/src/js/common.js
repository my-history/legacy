"use strict";

const setFont = fz => Cookies.set('fontsize', fz, {
	expires: 9999
});
const getFont = () => Cookies.get('fontsize');
const showFont = () => currentFontSizeEl.text(getFont());

const setTheme = t => Cookies.set('theme', t, {
	expires: 9999
});
const getTheme = () => Cookies.get('theme');

const setAlertInfo = f => Cookies.set('alertinfo', f, {
	expires: 9999
});
const getAlertInfo = () => Cookies.get('alertinfo');

const tabLogo = $('[data-script-role="favicon"]')
const headerEl = $('[data-script-role="header"]');
const headerLogo = $('[data-script-role="header-logo"]')
const control = $('[data-script-role="control"]');
const prefIcon = $('[data-script-role="contol-trigger"] i');
const contentsIcon = $('[data-script-role="contents-trigger"] i');
const contents = $('[data-script-role="contents"]');
const resetStylesEl = $('[data-script-role="reset"]');
const incFontSizeEl = $('[data-script-role="inc-font"]');
const decFontSizeEl = $('[data-script-role="dec-font"]');
const closeAlertEl = $('[data-script-role="close-alert"]');
const alertEl = $('[data-script-role="alert"]');
const closeAlertWithSave = $('[data-script-role="close-alert-with-save-data"]');
const themeChangeButtonEl = $('[data-script-role="theme"]');
const prefTriggerEl = $('[data-script-role="contol-trigger"]');
const contentsTriggerEl = $('[data-script-role="contents-trigger"]');
const currentFontSizeEl = $('[data-script-role="current-fontsize"]');
const navigation = $('[data-script-role="navigation"]')
const navigationTrigger = $('[data-script-role="navigation-trigger"]');
const closeNavigation = $('[data-script-role="close-navigation"]');

const themingElements = [
	'.header',
	'.control',
	'.a',
	'article',
	'.header-logo img',
	'.header-title h1',
	'.header-button',
	'.control-option',
	'.control-button',
	'.header-button i',
	'blockquote.a',
	'blockquote.p',
	'.image-block .caption',
	'.image-block .caption:before',
	'.contents',
	'.contents *',
	'.alert',
	'.alert-text',
	'.alert-button',
];

const fontsizingElements = [
	'p',
	'a.a',
	'h1.a',
	'h2.a',
	'h3.a',
	'h4.a',
	'blockquote.a',
	'blockquote.p',
];


function initFontSize() {

	let amountOfFZels = fontsizingElements.length;

	for (let i = 0; i < amountOfFZels; i++) {
		for (let j = 0; i <= 10; i++) {
			$(fontsizingElements[i]).removeClass('fz-' + j + 'x');
		}
	}

	switch (getFont()) {
		case '0': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-0x');
			}
			showFont()
			break;
		}

		case '1': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-1x');
			}
			showFont()
			break;
		}

		case '2': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-2x');
			}
			showFont()
			break;
		}

		case '3': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-3x');
			}
			showFont()
			break;
		}

		case '4': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-4x');
			}
			showFont()
			break;
		}
		case '5': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-5x');
			}
			showFont()
			break;
		}
		case '6': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-6x');
			}
			showFont()
			break;
		}
		case '7': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-7x');
			}
			showFont()
			break;
		}
		case '8': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-8x');
			}
			showFont()
			break;
		}

		case '9': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-9x');
			}
			showFont()
			break;
		}

		case '10': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).addClass('fz-10x');
			}
			showFont()
			break;
		}
	}
}

function initTheme() {
	switch (getTheme()) {
		case 'light': {
			applyLightTheme();
			document.getElementById("switch").checked = false;
			break;
		}

		case 'dark': {
			applyDarkTheme();
			document.getElementById("switch").checked = true;
			break;
		}
	}
}

function changeTheme() {
	switch (getTheme()) {
		case 'dark': {
			applyLightTheme();
			break;
		}

		case 'light': {
			applyDarkTheme();
			break;
		}
	}
}


function applyLightTheme() {
	let amountOfTEls = themingElements.length;
	for (let i = 0; i < amountOfTEls; i++) {
		$(themingElements[i]).removeClass('dark-theme');
	}
	setTheme('light')
	headerLogo.attr('src', '/motherland/dist/images/mm/logoday.png')
	tabLogo.attr('href', '/motherland/dist/images/mm/logoday.png')
	$('#theme-color-ms').attr('content', '#ffffff');
	$('#theme-color').attr('content', '#ffffff');
}

function applyDarkTheme() {
	let amountOfTEls = themingElements.length
	for (let i = 0; i < amountOfTEls; i++) {
		$(themingElements[i]).addClass('dark-theme');
	}
	setTheme('dark')
	headerLogo.attr('src', '/motherland/dist/images/mm/logonight.png')
	tabLogo.attr('href', '/motherland/dist/images/mm/logonight.png')
	$('#theme-color-ms').attr('content', '#0c0c0c');
	$('#theme-color').attr('content', '#0c0c0c');

}

function incFontSize() {
	let amountOfFZels = fontsizingElements.length;

	switch (getFont()) {
		case '0': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-0x');
				$(fontsizingElements[i]).addClass('fz-1x');
			}
			setFont(1);
			showFont();
			break;
		}
		case '1': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-1x');
				$(fontsizingElements[i]).addClass('fz-2x');
			}
			setFont(2)
			showFont()
			break;
		}
		case '2': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-2x');
				$(fontsizingElements[i]).addClass('fz-3x');
			}
			setFont(3)
			showFont()
			break;
		}
		case '3': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-3x');
				$(fontsizingElements[i]).addClass('fz-4x');
			}
			setFont(4)
			showFont()
			break;
		}

		case '4': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-4x');
				$(fontsizingElements[i]).addClass('fz-5x');
			}
			setFont(5)
			showFont()
			break;
		}

		case '5': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-5x');
				$(fontsizingElements[i]).addClass('fz-6x');
			}
			setFont(6)
			showFont()
			break;
		}
		case '6': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-6x');
				$(fontsizingElements[i]).addClass('fz-7x');
			}
			setFont(7)
			showFont()
			break;
		}
		case '7': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-7x');
				$(fontsizingElements[i]).addClass('fz-8x');
			}
			setFont(8)
			showFont()
			break;
		}
		case '8': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-8x');
				$(fontsizingElements[i]).addClass('fz-9x');
			}
			setFont(9)
			showFont()
			break;
		}
		case '9': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-9x');
				$(fontsizingElements[i]).addClass('fz-10x');
			}
			setFont(10)
			showFont()
			break;
		}
	}
}

function decFontSize() {
	let amountOfFZels = fontsizingElements.length;

	switch (getFont()) {
		case '1': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-1x');
				$(fontsizingElements[i]).addClass('fz-0x');
			}
			setFont(0)
			showFont()
			decFontSizeEl.addClass('disabled')
			break;
		}

		case '2': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-2x');
				$(fontsizingElements[i]).addClass('fz-1x');
			}
			setFont(1)
			showFont()
			break;
		}

		case '3': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-3x');
				$(fontsizingElements[i]).addClass('fz-2x');
			}
			setFont(2)
			showFont()
			break;
		}

		case '4': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-4x');
				$(fontsizingElements[i]).addClass('fz-3x');
			}
			setFont(3)
			showFont()
			break;
		}

		case '5': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-5x');
				$(fontsizingElements[i]).addClass('fz-4x');
			}
			setFont(4)
			showFont()
			break;
		}
		case '6': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-6x');
				$(fontsizingElements[i]).addClass('fz-5x');
			}
			setFont(5)
			showFont()
			break;
		}
		case '7': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-7x');
				$(fontsizingElements[i]).addClass('fz-6x');
			}
			setFont(6)
			showFont()
			break;
		}
		case '8': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-8x');
				$(fontsizingElements[i]).addClass('fz-7x');
			}
			setFont(7)
			showFont()
			break;
		}

		case '9': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-9x');
				$(fontsizingElements[i]).addClass('fz-8x');
			}
			setFont(8)
			showFont()
			break;
		}
		case '10': {
			for (let i = 0; i < amountOfFZels; i++) {
				$(fontsizingElements[i]).removeClass('fz-10x');
				$(fontsizingElements[i]).addClass('fz-9x');
			}
			setFont(9)
			showFont()
			break;
		}
	}
}

function resetStyles() {
	setFont('3');
	initFontSize();
	applyLightTheme();
	document.getElementById("switch").checked = false;
}

function slowScroll(id) {
	var offset = 400;

	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 2000);
	contents.addClass('l-dn');
	contentsIcon.addClass('fa-bars');
	contentsIcon.removeClass('fa-times');
	return false;
}

function chooseTheme() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();

	hours = hours + (minutes / 60);
	console.log(hours)

	if (hours <= 21 && hours >= 7) {
		applyLightTheme()
	} else {
		applyDarkTheme()
	}
}


$(document).on('scroll', () => {
	if ($(window).scrollTop() > 90) {
		$('[data-script-role="header"]').addClass('is-scrolling');
	} else {
		$('[data-script-role="header"]').removeClass('is-scrolling');
	}
})

$(document).ready(function () {

	if (getAlertInfo() == undefined || getAlertInfo() == NaN || getAlertInfo() == null || getAlertInfo() == 'false') {
		alertEl.removeClass('l-dn');
		setAlertInfo('false');
	}

	if (getFont() == undefined || getFont() == NaN || getFont() == null) {
		setFont('3');
		initFontSize();
	} else {
		setFont(getFont())
	}

	if (getTheme() == undefined) {
		chooseTheme();
	}

	initFontSize();
	showFont();
	initTheme();

	prefTriggerEl.click(() => {
		if (control.hasClass('l-dn')) {
			prefIcon.addClass('fa-times');
			prefIcon.removeClass('fa-cogs');
			control.removeClass('l-dn');
		} else {
			prefIcon.addClass('fa-cogs');
			prefIcon.removeClass('fa-times');
			control.addClass('l-dn')
		}

		if (!contents.hasClass('l-dn')) {
			contents.addClass('l-dn');
			contentsIcon.addClass('fa-bars');
			contentsIcon.removeClass('fa-times');
		}
	});

	contentsTriggerEl.click(() => {
		if (contents.hasClass('l-dn')) {
			contentsIcon.addClass('fa-times');
			contentsIcon.removeClass('fa-bars');
			contents.removeClass('l-dn');
		} else {
			contentsIcon.addClass('fa-bars');
			contentsIcon.removeClass('fa-times');
			contents.addClass('l-dn')
		}
		if (!control.hasClass('l-dn')) {
			control.addClass('l-dn');
			prefIcon.addClass('fa-cogs');
			prefIcon.removeClass('fa-times');
		}
	})

	navigationTrigger.click(() => {
		navigation.removeClass('l-dn')
	})

	closeNavigation.click(() => {
		navigation.addClass('l-dn')
	})

	closeAlertEl.click(() => {
		alertEl.addClass('l-dn');
	})

	closeAlertWithSave.click(() => {
		alertEl.addClass('l-dn');
		setAlertInfo('true')
	})

	themeChangeButtonEl.click(() => {
		changeTheme()
	})

	incFontSizeEl.click(() => {

		incFontSize()
	})

	decFontSizeEl.click(() => {
		decFontSize()
	})

	resetStylesEl.click(() => {
		resetStyles()
	})
})

key('t', () => {
	changeTheme();
})

key('u', () => {
	incFontSize();
})

key('d', () => {
	decFontSize();
})

function hide(el) {
	el.classList.add('l-dn')
}

function show(el) {
	el.classList.remove('l-dn')
}
