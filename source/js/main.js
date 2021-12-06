function shuffle(array) {
	var currentIndex = array.length, randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

const myFullpage = new fullpage('#fullpage', {
	anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
	navigation: true,
	navigationTooltips: ['Solo Vivo', "Produto", "Let's grooow", 'Contato'],
	scrollHorizontallyKey: 'dGVycm8uYWdyLmJyX1doU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NTJidA==',
	scrollHorizontally: true,
	showActiveTooltip: true,
	dropEffectKey: 'dGVycm8uYWdyLmJyX1dwelpISnZjRVZtWm1WamRBPT1PUTQ=',
	dropEffect: true,
	dropEffectOptions: {
		speed: 2300,
		color: shuffle(['#362617', '#225439', '#520091', '#EADACA', '#EADACA']),
		zIndex: 9999
	}
});
