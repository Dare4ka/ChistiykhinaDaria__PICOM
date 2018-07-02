$(document).ready(function(){

		//карусель продуктов
	function carousel(block, arow) {
		$(block).owlCarousel({
  			nav: true,
  			loop: true,
  			dots: false,
  			navContainer: arow,
 			responsive:{ 
					0:{
						items:1
					},
					420:{
						items:2
					},
					680:{
						items:3
					},
					880:{
						items:4
					}
			}	
  		});
	};

	carousel('#carousel-1', '#arow-1');
	carousel('#carousel-2', '#arow-2');
	carousel('#carousel-3', '#arow-3');
	carousel('#carousel-4', '#arow-4');
	carousel('#carousel-5', '#arow-5');

		//карусель осковной слайдер
	$('#slider').owlCarousel({
  			nav: true,
  			loop: true,
  			autoplay: true,
  			center: true,
  			autoplayHoverPause: true,
  			navContainer: '#slider-arow',
  			dotsContainer: '#slider-btn',
 			responsive:{ 
					0:{
						items:1
					}
			}	
  		});


		//преключение слайдеров в меню
	$('.menu__link_product').click(function openMenu(e) {
		e.preventDefault();
		$(this).addClass('menu__link_product_open')
		.siblings('.product').addClass('product_open');
		$('.menu__link_product').not($(this))
		.removeClass('menu__link_product_open')
		.siblings('.product').removeClass('product_open');
	});
		//переключение меню навигации
	$('.menu__link_navigation').click(function openNav(e) {
		e.preventDefault();
		$(this).toggleClass('menu__link_navigation_open')
		.siblings('.menu__items_2').toggleClass('menu__items_2_open');
		$('.menu__link_navigation').not($(this))
		.removeClass('menu__link_navigation_open')
		.siblings('.menu__items_2').removeClass('menu__items_2_open');
	});

		//кнопка открытия адаптивного меню
	$('.menu-open').click(function () {
		$('.menu-open__global_top').toggleClass('menu-open__global_top_open');
		$('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
		$('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
		$('.menu_navigation').toggleClass('menu_navigation_open');
		$('.menu__item_navigation').slideToggle(200);
	});
});