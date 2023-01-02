/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	/**
	 * Phrase-object constructor
	 * @param {string} phrase
	 */
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		let HTML = '';
		const phraseUL = document.getElementById('phrase').firstElementChild;

		// (!!!)
		[...this.phrase].forEach( c => { 
			let classList = 'space';
			
			if(c!==' ') classList = `hide letter ${c}`;

			// [ ] Re-indent, add tab-removal
			HTML+=
`<li class="${classList}">${c}</li>
`;
		});

		phraseUL.innerHTML=HTML;
	}

	checkLetter(letter) { return this.phrase.includes(letter); }

	showMatchedLetter(letter) {
		const matchingLIs = document.getElementsByClassName(letter);
		for(let li of matchingLIs) li.classList.replace('hide', 'show');
	}
}

//[DEL Paragraph] For testing only
//const testPhrase = new Phrase('test phrase'); //[DEL Line]
//testPhrase.addPhraseToDisplay();