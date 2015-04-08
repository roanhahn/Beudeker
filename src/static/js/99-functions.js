
var tabletls = 1024;
var tablet = 768;

var siteWidth = $(".header").width();
var headerHeight = $(".header").height() - 2;

$(".header-menu-btn").click(function() 
{
	$('.header-nav').toggleClass('header-nav-expand');
}); 

$(window).resize(function(){
	if (siteWidth > tabletls){
		$('.header-nav').removeClass('header-nav-expand');
	}
});


		// LAZY LOAD IMAGES

		$(".lazy").unveil(200, function() {
			$(this).load(function() {
				this.style.opacity = 1;
			});
		});


		//FULL SCREEN VIDEO

		$(".hero-video").wallpaper({
			mute: true,
			loop: true,
			autoPlay: true,
			source: {

				poster: "assets/img/hero.jpg",
				video: "//www.youtube.com/embed/awArTC8iQ3Q"
			}
		});



		// SCROLL REVEAL SETTINGS

		/*var config = {
			enter:    'bottom',
			move:     '8px',
			over:     '0.6s',
			wait:     '0s',
			easing:   'ease',

			scale:    { direction: 'up', power: '0%' },
			rotate:   { x: 0, y: 0, z: 0 },

			opacity:  0,
			mobile:   false,
			reset:    false,

					//        Expects a reference to a DOM node (the <html> node by default)
					//        which is used as the context when checking element visibility.
					viewport: window.document.documentElement,

					//        'always' — delay every time an animation resets
					//        'onload' - delay only for animations triggered by first load
					//        'once'   — delay only the first time an animation reveals
					delay:    'always',

					//        vFactor changes when an element is considered in the viewport.
					//        The default value of 0.60 means 60% of an element must be
					//        visible for its reveal animation to trigger.
					vFactor:  0.20
				}

				window.sr = new scrollReveal(config);*/

		// ANKERS

		$(".hero-arrow").click(function() 
		{
			$('html, body').animate(
				{scrollTop: $(".section-about-us").offset().top-headerHeight},
				{
					duration: 1500, // how fast we are animating
					easing: 'easeInOutCubic' // the type of easing
				}
			);
		}); 

		$(".nav-about").click(function() 
		{
			$('html, body').animate(
				{scrollTop: $(".section-about-us").offset().top-headerHeight},
				{
					duration: 1500, // how fast we are animating
					easing: 'easeInOutCubic' // the type of easing
				}
			);
			if (siteWidth <= tabletls)
			{
				$( ".header-nav" ).removeClass( "header-nav-expand");
			}
		}); 

		$(".nav-services").click(function() 
		{
			$('html, body').animate(
				{scrollTop: $(".section-services").offset().top-headerHeight},
				{
					duration: 1500, // how fast we are animating
					easing: 'easeInOutCubic' // the type of easing
				}
			);
			if (siteWidth <= tabletls)
			{
				$( ".header-nav" ).removeClass( "header-nav-expand");
			}
		}); 

		$(".nav-offers").click(function() 
		{
			$('html, body').animate(
				{scrollTop: $(".section-offers").offset().top-headerHeight},
				{
					duration: 1500, // how fast we are animating
					easing: 'easeInOutCubic' // the type of easing
				}
			);
			if (siteWidth <= tabletls)
			{
				$( ".header-nav" ).removeClass( "header-nav-expand");
			}
		}); 

		$(".nav-contact").click(function() 
		{
			$('html, body').animate(
				{scrollTop: $(".section-contact").offset().top-headerHeight},
				{
					duration: 1500, // how fast we are animating
					easing: 'easeInOutCubic' // the type of easing
				}
			);
			if (siteWidth <= tabletls)
			{
				$( ".header-nav" ).removeClass( "header-nav-expand");
			}
		}); 

		$(".back-to-top-btn").click(function(){;
			$('html, body').animate({scrollTop:0}, 1000);
			return false;
		});

		$(window).scroll(function(){
			if ($(this).scrollTop() > 200) {
				$('.back-to-top-btn').fadeIn();
			} else {
				$('.back-to-top-btn').fadeOut();
			}
		});

		$(window).scroll(function(){
			if (siteWidth > tabletls){
				if ($(this).scrollTop() > 200) {
					$('.header').addClass("fixed-header");
				} else {
					$('.header').removeClass("fixed-header");
				}

				if ($(this).scrollTop() > 450) {
					$('.header').addClass("sticky-header");
				} else {
					$('.header').removeClass("sticky-header");
				}

				if ($(this).scrollTop() > 500) {
					$('.header').addClass("sticky-header-down");
				} else {
					$('.header').removeClass("sticky-header-down");
				}
			}

		});