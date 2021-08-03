import anime from './anime-master/lib/anime.es.js';
const intro = document.querySelector('#home');
const enter = document.querySelector('.home-img-arrow');
const shape = document.querySelector('#Group_7 path');
shape.style.transformOrigin = '50% 0%';

function animation() {
	anime({
		targets: intro,
		duration: 2100,
		easing: 'easeInOutSine',
		translateY: '-200vh'
	});
	
	anime({
		targets: 'svg path',
		translateY: [0, 100],
		delay: function (el, i, l) {
			return i * 5000
		},
		easing: 'easeOutCubic',
		duration: 4000
	});
}

const init = () => {
	enter.addEventListener('click', animation);
	enter.addEventListener('touchenter', animation);
};

init();

const superDiv = document.querySelector('.product-info-super');
const auto     = document.querySelector('.product-info-auto');
const product  = document.querySelector('#product');

superDiv.onmouseover = function () {
	product.className = 'hovered-green';
}
superDiv.onmouseout = function () {
	product.className = '';
}
auto.onmouseover = function () {
	product.className = 'hovered-auto';
}

auto.onmouseout = function () {
	product.className = '';
}