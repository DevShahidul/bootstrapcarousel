(function ($) {
	"use strict";

	/*------------------------------------
			Preloader
		--------------------------------------*/

	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	});






	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

	/* Search
		-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});



	//sticky-menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".main-header-area").removeClass("sticky");
		} else {
			$(".main-header-area").addClass("sticky");
		}
	});



	// deal-active
	$('.bb-slider-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		stagePadding: 140,
		center: true,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 15,
				stagePadding: 30,
			},
			576: {
				items: 1,
				margin: 15,
				stagePadding: 60,
			},
			768: {
				items: 3,
				stagePadding: 70,
			},
			992: {
				items: 3,
				stagePadding: 100,
			},
			1200: {
				items: 3,
			},
		}
	})







	// window load event




	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 500, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 300, // Animation in speed (ms)
		animationOutSpeed: 300, // Animation out speed (ms)
		scrollText: '<i class="fas fa-chevron-double-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


	// wow animation - start
	// --------------------------------------------------
	function wowAnimation() {
		new WOW({
			offset: 100,
			mobile: true
		}).init()
	}
	wowAnimation();






})(jQuery);