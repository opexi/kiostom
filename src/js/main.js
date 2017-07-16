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
		$newsSlider = $(".news_actions .slider"),
		$dotsNewsSlider = $(".news_actions .slider_dots .dots"),
		$arrowsNewsSlider = $(".news_actions .slider_arrows .arrows"),
		$prevArrow = $("<span class=\"prev\"></span>"),
		$nextArrow = $("<span class=\"next\"></span>");
	$arrowsNewsSlider.append($prevArrow).append($nextArrow);
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
        arrows: true,
        dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		appendDots: $dotsNewsSlider,
		appendArrows: $arrowsNewsSlider,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: true,
				}
			},
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
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