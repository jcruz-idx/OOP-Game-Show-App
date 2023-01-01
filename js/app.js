/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//[DEL Paragraph] For testing only
const testPhrase = new Phrase('I love you');
testPhrase.addPhraseToDisplay();


let game;
const startBtn = document.getElementById('btn__reset');
//const overlay = document.getElementById('overlay');

startBtn.addEventListener('click', () => {
	// 
	document.getElementById('overlay').style.display = 'none';
});