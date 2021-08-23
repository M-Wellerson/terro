// import anime from './anime-master/lib/anime.es.js';
const intro = document.querySelector('#home');
const call = document.querySelector('#call');
const enter = document.querySelector('.home-img-arrow');
const wave_1 = document.querySelector('#Group_1 path');
const wave_2 = document.querySelector('#Group_2 path');
const wave_3 = document.querySelector('#Group_3 path');
// shape.style.transformOrigin = '50% 0%';

// function target() {
// 	anime({
// 		targets: intro,
// 		duration: 3100,
// 		easing: 'easeOutQuad',
// 		translateY: '-300vh'
// 	});
// 	call.scrollIntoView()
// }

// function animation() {
// 	target()

// 	anime({
// 		targets: wave_1,
// 		translateY: [0, 100],
// 		easing: 'easeOutQuad',
// 		duration: 1100
// 	});
// 	anime({
// 		targets: wave_2,
// 		translateY: [0, 100],
// 		easing: 'easeOutQuad',
// 		duration: 1200
// 	});
// 	anime({
// 		targets: wave_3,
// 		translateY: [100, 150],
// 		easing: 'easeOutQuad',
// 		duration: 1300
// 	});
// }

// const init = () => {
// 	console.log(intro.offsetTop)
// 	enter.addEventListener('click', animation);
// 	enter.addEventListener('touchenter', animation);
// 	document.addEventListener('scroll', function (e) {
// 		if (window.scrollY >= 100) {
// 			target()
// 		}
// 	});
// };

// init();

function shuffle(array) {
	var currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}


const myFullpage = new fullpage('#fullpage', {
	// licenseKey: '316235BA-110A4D6D-981DBDD4-FB6D1E6C',
	anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
	navigation: true,
	navigationTooltips: ['Solo Vivo', "Produto", "Let's grooow", 'Contato'],
	scrollHorizontallyKey: 'Z2l0aHViLmlvXzdDZmMyTnliMnhzU0c5eWFYcHZiblJoYkd4NTBJOA==',
	scrollHorizontally: true,
	showActiveTooltip: true,
	dropEffectKey: 'Z2l0aHViLmlvX2I5RVpISnZjRVZtWm1WamRBPT1icDk=',
	dropEffect: true,
	dropEffectOptions: {
		speed: 2300,
		color: shuffle(['#362617', '#225439', '#520091', '#EADACA']),
		zIndex: 9999
	},
	onLeave: function (origin, destination, direction) {
		let leavingSection = this;
		console.log(origin.index, direction)
		// if (origin.index == 0 && direction == 'down') {
		// 	animationUp();
		// }
		// else if (origin.index == 1 && direction == 'up') {
		// 	animationDown();
		// }
	}
});
