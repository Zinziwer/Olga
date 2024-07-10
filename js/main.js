// new Swiper('.reviews__container',{
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 		dynamicBullets: true,
// 	},
// 	grid: {
// 		rows: 1,
// 	},
// 	loop: true,
// 	slidesPerWiew: 3,
// });
window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.uparrow');
	scroll.classList.toggle("active", window.scrollY>500)
});
function scrollTopTop(){
	window.scrollTo({
		top:0,
		behavior: "smooth"
	})
}
let burgerIcon = document.querySelector('.menu__burger');
let menu = document.querySelector('.header__menu');
let hb = document.querySelector('.header__buttons');
let body = document.querySelector('body');
burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
	hb.classList.toggle('active');
    body.classList.toggle('lock');
})
$(".owl-carousel").owlCarousel({
	margin: 10,
	loop: true,
	nav: true,

	// stagePadding: 100,
	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	responsive:{
		0: {
			items: 1.0
		},
		600: {
			items: 2.0
		},
		1200: {
			items: 3.0
		},
	},
});