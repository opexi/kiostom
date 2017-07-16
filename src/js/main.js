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
		$dotsWrapper = $(".container .dots", $slider),
		$newsSlider = $(".news_actions .slider");
		$dotsNewsSlider = $(".news_actions .slider_dots .dots");
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
	$newsSlider.slick({
        slide: '.slider-item',
        infinite: true,
        arrows: false,
        dots: true,
        cssEase: 'ease',
        fade: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		appendDots: $dotsNewsSlider,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 875,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}(jQuery);
/* slider */
!function($){
	$(".rotated").on("mouseenter click", function(){
		var $this = $(this);
		$(".rotated").each(function(){
			if($(this) != $this){
				$(this).removeClass("hover");
			}
		})
		$(this).addClass("hover");
	}).on("mouseleave", function(){
		$(".rotated").removeClass("hover");
	});
}(jQuery);