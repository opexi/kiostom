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
		$nextArrow = $("<span class=\"next\"></span>"),
		$reviewSlider = $(".about .slider"),
		$reviewArrows = $(".about .slider_arrows .arrows"),
		$prevRewArrow = $prevArrow.clone(),
		$nextRewArrow = $nextArrow.clone();
	$arrowsNewsSlider.append($prevArrow).append($nextArrow);
	$reviewArrows.append($prevRewArrow).append($nextRewArrow);
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
	$reviewSlider.slick({
		slide: '.slider-item',
		infinite: true,
		arrows: true,
		dots: false,
		cssEase: 'ease',
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		appendArrows: $reviewArrows,
		prevArrow: $prevRewArrow,
		nextArrow: $nextRewArrow,
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
!function($){
	$('a[rel="cert"]').fancybox({
		padding: 0,
		wrapCSS: '-fancybox-custom',
		type: 'image',
		helpers: {
			overlay: {
				locked: false
			},
			thumbs: {
				width: 50,
				height: 50
			}
		}
	});
}(jQuery);
/* VK */
!function($){
	var $groups = $("#vk_groups");
	if($groups.length){
		//VK.Widgets.Group("vk_groups", {mode: 3, width: "auto"}, 138987061);
		$(window).on("resize", function(e){
			$groups.removeAttr("style").empty();
			VK.Widgets.Group("vk_groups", {mode: 3, width: "auto"}, 138987061);
		}).trigger("resize");
	}
}(jQuery);
!function($){
	var initFormHeader = function(){
		$('input[placeholder="+7(999)999-99-99"]').mask("+7(999)999-99-99");
		$("[name=form_text_54]").datetimepicker({
			lang:'ru',
			minDate:0,
			format:'j.m.Y h:i'
		});
		$.fancybox.update();
	}
	BX.addCustomEvent('onAjaxSuccess', initFormHeader);
	if( $('.popup').length > 0)
	{
		$(".popup").fancybox({
			type: 'ajax',
			maxWidth: 700,
			padding: 0
		});

		$('body').on('submit', '.fancybox-type-ajax .fancybox-inner form', function(e){
			var inner = $('.fancybox-type-ajax .fancybox-inner')
				submit = inner.find('[type="submit"]');

			$(this).append('<input type="hidden" name="'+submit.attr('name')+'" value="'+submit.attr('value')+'" />');

			$.ajax({
				url: $(this).attr('action'),
				type: $(this).attr('method'),
				data: $(this).serialize(),
				success: function (data)
				{
					inner.html(data);
					$.fancybox.update();
				}
			});

			e.preventDefault();
		});
	}
	initFormHeader();
}(jQuery);