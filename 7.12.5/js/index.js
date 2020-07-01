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
					$('#toTop').click(function() {
						$('body,html').animate({scrollTop:0},1000);			 
					});
				});
				$(function() {
					$("#toAbout").click(function(){
						$("html, body").animate({scrollTop: $("header").height()+ 990 },1000);
					});
				})
				$(function() {
					$("#toLearn").click(function(){
						$("html, body").animate({scrollTop: $("header").height()+ 2000 },1000);
					});
				})
				$(function() {
					$("#toCheck").click(function(){
						$("html, body").animate({scrollTop: $("header").height()+ 3000 },1000);
					});
				})