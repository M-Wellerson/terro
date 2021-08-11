import anime from './anime-master/lib/anime.es.js';
const intro = document.querySelector('#home');
const enter = document.querySelector('.home-img-arrow');
const shape = document.querySelector('#Group_7 path');
shape.style.transformOrigin = '50% 0%';

function animation() {
	anime({
		targets: intro,
		duration: 3100,
		easing: 'easeInOutSine',
		translateY: '-300vh'
	});

	anime({
		targets: '#Group_7 path',
		strokeDashoffset: [anime.setDashoffset, 0],
		translateY: [0, 100],
		delay: function (el, i, l) {
			return i * 500
		},
		easing: 'easeOutInQuad',
		duration: 4000
	});
}

const init = () => {
	enter.addEventListener('click', animation);
	enter.addEventListener('touchenter', animation);
};

init();