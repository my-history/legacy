			$(document).ready(function(){
			$(".button-back").hide();
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('.button-back').fadeIn();
					}
					else {
					$('.button-back').fadeOut();
					}
				});
			});
		});
			$(window).load(function(){
  				$(window).scroll(function() {
    			var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
    			console.log(wintop);
    			var totalScroll = (wintop/(docheight-winheight))*100;
   				console.log("total scroll" + totalScroll);
    			$(".progressBar").css("width",totalScroll+"%");
  				});
			});
			$(function() {
				$("#toSights").click(function(){
					$("html, body").animate({scrollTop: $("header").height()+ 990 },1000);
				});
			})