/* menu */
!function($){
	$('.mobile-menu').click(function(){
		var $this = $(this),
			$hm = $('header menu');
        $this.hasClass('opened') ? ($this.removeClass('opened'), $hm.removeClass('opened')) : ($this.addClass('opened'), $hm.addClass('opened'));
    });

    $('a.with-submenu').click(function(){
        $(this).next('.submenu').toggleClass('opened');
    });
}(jQuery);
/* slider */
!function($){
	var $slider = $('.slider-block .slider-wrapper'),
		$dotsWrapper = $(".container .dots", $slider);
	/*Slider.on('init', function(slick){
        var dots = $(slick.target).find('> .slick-dots');
        dots.appendTo( $(slick.target).find('.dots') );
    });*/
	$slider.slick({
        slide: '.slide',
        infinite: true,
        arrows: false,
        dots: true,
        cssEase: 'ease',
        fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		appendDots: $dotsWrapper,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					cssEase: 'linear',
					fade: true,
					useCSS: false,
				}
			}
		]
    });
}(jQuery);