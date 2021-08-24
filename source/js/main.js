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
	}
});
