import anime from './anime-master/lib/anime.es.js';
const intro = document.querySelector('#home');
const call = document.querySelector('#call');
const enter = document.querySelector('.home-img-arrow');
const wave_1 = document.querySelector('#Group_1 path');
const wave_2 = document.querySelector('#Group_2 path');
const wave_3 = document.querySelector('#Group_3 path');
// shape.style.transformOrigin = '50% 0%';

function target() {
	anime({
		targets: intro,
		duration: 3100,
		easing: 'easeOutQuad',
		translateY: '-300vh'
	});
	call.scrollIntoView()
}

function animation() {
	target()

	anime({
		targets: wave_1,
		translateY: [0, 100],
		easing: 'easeOutQuad',
		duration: 1100
	});
	anime({
		targets: wave_2,
		translateY: [0, 100],
		easing: 'easeOutQuad',
		duration: 1200
	});
	anime({
		targets: wave_3,
		translateY: [100, 150],
		easing: 'easeOutQuad',
		duration: 1300
	});
}

const init = () => {
	console.log(intro.offsetTop)
	enter.addEventListener('click', animation);
	enter.addEventListener('touchenter', animation);
	document.addEventListener('scroll', function(e) {
		if( window.scrollY >= 100 ) {
			target()
		}
	});
};

// init();

const myFullpage = new fullpage('#fullpage', {
	// licenseKey: '316235BA-110A4D6D-981DBDD4-FB6D1E6C',
	anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
	navigation: true,
	navigationTooltips: ['Solo Vivo', "Produto", "Let's grooow", 'Contato'],
	scrollHorizontallyKey: '9BD0A298-F44D47ED-A90A3FE7-DDD1FDD2',
	scrollHorizontally: true,
	showActiveTooltip: true,
	// onLeave: function (origin, destination, direction) {
	// 	let leavingSection = this;
	// 	if (origin.index == 0 && direction == 'down') {
	// 		animationUp();
	// 	}
	// 	else if (origin.index == 1 && direction == 'up') {
	// 		animationDown();
	// 	}
	// }
});

const div = document.querySelector("div[style*='z-index:']");
console.log(div);
console.log('div');
div.parentNode.removeChild(div);
// div.forEach(element => {
// 	if( element.className == '' ) {
// 		element.parentNode.removeChild(element);
// 	}
	
// });
