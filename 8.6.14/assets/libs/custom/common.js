jQuery(document).ready(function () {
	if (typeof window.spoof_vbruvbdskuvhnfdiuv == 'undefined') {
		jQuery("#spoof-overlay").fadeIn('slow');
	}
});

$(window).on('load', function () {
	var $preloader = $('#preloader'),
		$svg_anm = $preloader.find('.svg_anm');
	$svg_anm.fadeOut();
	$preloader.delay(500).fadeOut('slow');
})


