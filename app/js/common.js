$(document).ready(function(){

		// слайдер в меню продуктов
	function htmSlider(slideWrap, nextLink, prevLink, slideItem){
		
		// Клик по ссылке на следующий слайд 
		nextLink.click(function(){
			slideWrap.animate({left: slideWrap.position().left - $(slideItem).outerWidth()}, 500, function(){
				slideWrap
				.find(slideItem).first()
				.appendTo(slideWrap)
				.parent()
				.css({'left': 0});
			});
		});

		// Клик по ссылке на предыдующий слайд 
		prevLink.click(function(){
			slideWrap
			.css({'left': slideWrap.position().left - $(slideItem).outerWidth()})
			.find(slideItem).last()
			.prependTo(slideWrap)
			.parent()
			.animate({left: 0}, 500);
		});
	};
 
		// иницилизация функции слайдера 
	htmSlider($('.product__wrap_1'), $('.product__arow_next_1'), $('.product__arow_prev_1'), '.product__item_1');
	htmSlider($('.product__wrap_2'), $('.product__arow_next_2'), $('.product__arow_prev_2'), '.product__item_2');
	htmSlider($('.product__wrap_3'), $('.product__arow_next_3'), $('.product__arow_prev_3'), '.product__item_3');
	htmSlider($('.product__wrap_4'), $('.product__arow_next_4'), $('.product__arow_prev_4'), '.product__item_4');
	htmSlider($('.product__wrap_5'), $('.product__arow_next_5'), $('.product__arow_prev_5'), '.product__item_5');

		//преключение слайдеров в меню
	$('.menu__link_product').click(function openMenu(e) {
		e.preventDefault();
		$(this).toggleClass('menu__link_product_open')
		.siblings('.product').toggleClass('product_open');
		$('.menu__link_product').not($(this))
		.removeClass('menu__link_product_open')
		.siblings('.product').removeClass('product_open');
	});

		//основной не цикличный слайдер
	function navigationSlider() {
		var slideNow = 1;
		var slideCount = $('.slider__wrap').children().length;
		var slideInterval = 5000;
		var navBtnId = 0;
		var translateWidth = 0;
		var switchInterval = setInterval(nextSlide, slideInterval);

		$('.slider').hover(function() {
			clearInterval(switchInterval);
		}, function() {
			switchInterval = setInterval(nextSlide, slideInterval);
		});

		$('.slider__arow_next_nav').click(function() {
			nextSlide();
		});

		$('.slider__arow_prev_nav').click(function() {
			prevSlide();
		});
		
		$('.slider__btn').click(function() {
			navBtnId = $(this).index();

			if (navBtnId + 1 != slideNow) {
				translateWidth = -$('.slider__list').width() * (navBtnId);
				$('.slider__wrap').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
					'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
					'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
				});
			$(this).addClass('slider__btn_active');
			$('.slider__btn').not($(this)).removeClass('slider__btn_active');
			slideNow = navBtnId + 1;
			}
		});

		function nextSlide() {
			if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
				$('.slider__wrap').css('transform', 'translate(0, 0)');
				slideNow = 1;
			} else {
				translateWidth = -$('.slider__list').width() * (slideNow);
				$('.slider__wrap').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
					'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
					'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
					});
				slideNow++;
			}
		};

		function prevSlide() {
			if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
				translateWidth = -$('.slider__list').width() * (slideCount - 1);
				$('.slider__wrap').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
					'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
					'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
				});
				slideNow = slideCount;
			} else {
				translateWidth = -$('.slider__list').width() * (slideNow - 2);
				$('.slider__wrap').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
					'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
					'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
				});
				slideNow--;
			}
		};
	};

  navigationSlider();

	$('.menu-open').click(function () {
		$('.menu-open__global_top').toggleClass('menu-open__global_top_open');
		$('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
		$('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
		$('.menu_navigation').toggleClass('menu_navigation_open');
		$('.menu__item_navigation').slideToggle(200)
	});
});