/* Slider */
$(window).on('load', function() {
	$('#slider').nivoSlider({
		directionNav: false
    	//controlNav: false,
    	//controlNavThumbs: true
    });
  });

/*----------------------------------*/
/* Mobile menu */
jQuery(document).ready(function($) {

	var $hamburger = $('.hamburger');
	$hamburger.on('click', function(e) {
		$hamburger.toggleClass('is-active');
    // Do something else, like open/close menu
    $('.menu').slideToggle();
    $('.mob-menu-btn, .menu').toggleClass('fixed');
  });
	/*--------------------------------------------*/
	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.menu a').removeClass('mob-menu');
			$('.menu').show();
			$('.mob-menu-btn, .menu').removeClass('fixed');
			$hamburger.removeClass('is-active');
		} 
		else {
			$('.menu').hide();
			$hamburger.removeClass('is-active');
			$('.menu a').addClass('mob-menu');
		};
	});

	if ($(window).width() < 992) {
		$('.menu a').addClass('mob-menu');
	};

	$('body').on('click', '.mob-menu', function() {
		$('.menu').hide();
		$hamburger.toggleClass('is-active');
		$('.mob-menu-btn, .menu').removeClass('fixed');
	});

	/* Smooth Scrolling
	------------------------------------------------------ */

	$('.menu a').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});  

});
