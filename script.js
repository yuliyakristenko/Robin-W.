const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.btn-burger').addEventListener('click', () => {
	header.classList.toggle('section-header--active-nav');

	if (header.classList.contains('section-header--active-nav')) {
		hideScroll();
	} else {
		showScroll();
	}
});

const hideScroll = () => {
	const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	header.classList.remove('section-header--active-nav');
	showScroll();
};

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px';
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
};

// function checkScreenWidth() {
// 	var swiperContainer = document.querySelector('.swiper');
// 	var windowWidth = window.innerWidth;

// 	if (windowWidth >= 1440) {
// 		// Показываем Swiper, если ширина экрана больше или равна 1440px
// 		swiperContainer.style.display = 'flex';

// Инициализируем Swiper
// var swiper = new Swiper(".mySwiper", {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	breakpoints: {
// 640: {
// 	slidesPerView: 2,
// 	spaceBetween: 20,
// },
// 768: {
// 	slidesPerView: 4,
// 	spaceBetween: 40,
// },
// 		1024: {
// 			slidesPerView: 5,
// 			spaceBetween: 50,
// 		},
// 	},
// });
// 	} else {
// 		// Скрываем Swiper, если ширина экрана меньше 1440px
// 		swiperContainer.style.display = 'none';
// 	}
// }

// Вызываем функцию при загрузке страницы
// checkScreenWidth();

// // Следим за изменениями размера окна и вызываем функцию при изменении
// window.addEventListener('resize', function () {
// 	checkScreenWidth();
// });


var swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},
});
