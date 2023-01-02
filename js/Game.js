/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		const strArr = [
			'We Will Rock You',
			'We are the Champions',
			"I Dont Wanna Hear It",
			'Rock n Roll',
			'Eye of the Tiger'
		];
		this.phrases = [];
		strArr.forEach( str => {
			const obj = new Phrase(str);
			this.phrases.push(obj);
		});
		this.missed = 0;
		this.activePhrase = null;
		this.mode = 'hard';
	}

	//Comment
	startGame() {
		document.getElementById('overlay').style.display = 'none';

		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	//Comment
	getRandomPhrase() {
		const r = Math.floor( Math.random()*this.phrases.length );
		return this.phrases[r];
	}

	handleInteraction(key) {
		const letter = key.textContent;
		const match = this.activePhrase.checkLetter(letter);
		key.disabled = true;

		if(!match) {
			key.classList.add('wrong');
			if(this.mode==='hard') this.removeLife();
			return;
		}
		key.classList.add('chosen');
		this.activePhrase.showMatchedLetter(letter);
		if( this.checkForWin() ) this.gameOver();
	}

	checkForWin() {
		const letterLIs = document.getElementsByClassName('letter');

		for(let li of letterLIs) {
			if( !li.classList.contains('show') ) return false;
		}

		return true;
	}

	removeLife() {
		const score = document.getElementById('scoreboard').firstElementChild.children;
		const max = score.length;
		
		score[max-this.missed-1].firstElementChild.src='images/lostHeart.png';
		
		this.missed++;
		
		if(this.missed>=5) this.gameOver();
	}

	gameOver() {
		let gameOverMsg = 'Congratulations!';
		let resultClassName = 'win'
		const overlay = document.getElementById('overlay');
		
		overlay.style.display = 'flex';
		
		if(this.missed>=5) {
			gameOverMsg = 'Please try again.';
			resultClassName = 'lose';
		}

		document.getElementById('game-over-message').textContent = gameOverMsg;
		overlay.classList.replace('start', resultClassName);

		//Don't really need to do this since the ULs innerHTML gets replaced
		const phraseUL = document.getElementById('phrase').firstElementChild;
		phraseUL.innerHTML='';

		// [WATCH] HTMLCollection is live so removing classNames removes from collection live
		//         for .getElementsByClassName, .querySelectorAll makes "static" nodelist?
		const chosen = document.querySelectorAll('.chosen');
		const wrong = document.querySelectorAll('.wrong');

		this.resetKeys(chosen, 'chosen');
		this.resetKeys(wrong, 'wrong');

		const lostHearts = document.querySelectorAll('[src="images/lostHeart.png"]');
		for(let heart of lostHearts) heart.src='images/liveHeart.png';
	}

	resetKeys(keyList, className) {
		for(let key of keyList) { 
			key.classList.remove(className);
			key.disabled = false;
		}
	}
}