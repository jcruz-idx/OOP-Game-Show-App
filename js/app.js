/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//[DEL Paragraph] For testing only
//const testPhrase = new Phrase('I love you');
//testPhrase.addPhraseToDisplay();

//Add a tracking function like with the random quote generator for not repeats


let game;
const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');
//const overlay = document.getElementById('overlay');

overlay.addEventListener('click', e => {
	const btn = e.target;

	if(btn.tagName!=='BUTTON') return;
	game = new Game();
	if(btn.id==='btn__easy') game.mode = 'easy';

	game.startGame();
});

keyboard.addEventListener('click', e => {
	const key = e.target;
	if(key.tagName==='BUTTON') game.handleInteraction(key);
});