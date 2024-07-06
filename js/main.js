new Swiper('.reviews__container',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	loop: true,
	slidesPerWiew: 3,
});
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