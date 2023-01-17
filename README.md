# OOP Game Show App - Team Treehouse Project

## Project Summary
| Key | Value |
| --- | --- |
| project-name | Song Hunter |
| project-description | Object-Oriented Programing Game Application. Guess the song name. |
| filename | README.md |
| file-description | Compiled main and auto-generated readme files |
| for | Team Treehouse Full-Stack Javascript Techdegree Program, Project 4 |
| author | Joel Cruz |
| date | 20230116 |
| version | 2.0.0 |
| version-note | Team Treehouse submission |
| note | - |
| jsdoc3-documentation | - |

## Table of Contents
1. [Exceeds Expectations Additions](#exceeds-expectations-additions)
2. [Noteable Additions Beyond Exceeds Expectations](#noteable-additions-beyond-exceeds-expectations)
3. [Attribution](#attribution)
4. [Todo](#todo)
5. [app.js - Auto-generated JSDoc3 Markdown](#appjs---auto-generated-jsdoc3-markdown)
6. [Game.js - Auto-generated JSDoc3 Markdown](#gamejs---auto-generated-jsdoc3-markdown)
7. [Phrase.js - Auto-generated JSDoc3 Markdown](#phrasejs---auto-generated-jsdoc3-markdown)

## Exceeds Expectations Additions
1. Hardware Keyboard - Added hardware keyboard functionality.
2. Minor Style Personalization
	- Add slow transition animation from overlay to game board
	- Added Google Fonts: Brawler (Serif), Alegreya Sans SC.  Updated: CSS, HTML to link to fonts.
	- Added a background images to body-, and #overlay-elements in CSS.
	- Made header-class color lighter for improved visibility with new background image.
	- Focus on "start game" button on load, and on reload
	- Changed "Phrase Hunter" app name to "Song Hunter"
	- Changed heart images for improved visibility with new background image

## Noteable Additions Beyond Exceeds Expectations
1. Responsive - Added responsive design and media queries for mobile layout.
2. Easy-Mode - Added an "Easy-Mode" button to HTML overlay (so my 4-year-old could play without frustration!).
	- .removeLife() is not called when wrong letter is selected
	- Entire alphabet can be selected.
	- Life/heart total replaced with an exit button.
3. Tracking - Use a localStorage array to track indices of song/phrases shown.
	- No repeat entries until user has cycled through all entries.
	- Reset localStorage array once all entries have been shown.
	- (!) Clear variable from localStorage on window unload event.
4. Word-Breaks - Detect and prevent word-breaks in phrase display that occur frequently on small screens.
5. Game-Over Additions
	- Use a slow transition animation from game board to game-over overlay
	- Add a win/loss class name to overlay for CSS targeting
	- Set a game-over message including the correct name of the song
	- Set new overlay background color per win or loss

## Attribution
1. Most HTML and CSS provided by Team Treehouse as part of Project 4.
2. "Vinyl + Grado Headphones" background image by "blocks" on unsplash.com.  Original filename: blocks-T3mKJXfdims-unsplash.jpg.  New filename: records.jpg.  (Photo by <a href="https://unsplash.com/@blocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">blocks</a> on <a href="https://unsplash.com/images/things/music?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)
3. "Recrod Player" background image by "Dorien Monnens" on unsplash.com.  Original filename: dorien-monnens-UaSpWm8pTOc-unsplash.jpg.  New filename: record-player.jpg.  (Photo by <a href="https://unsplash.com/@dorienmonnens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dorien Monnens</a> on <a href="https://unsplash.com/photos/UaSpWm8pTOc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)

## Todo
- [] Rename localStorage.phraseIs to "phraseIndices"
- [] Test full-height on different mobile devices
- [] Publish to old portfolio site

<br/>
<br/>
<br/>
<br/>
<br/>

# app.js - Auto-generated JSDoc3 Markdown
The markdown below was automatically generated using JSDoc3, and jsdoc-to-markdown.

## Constants

<dl>
<dt><a href="#overlay">overlay</a> : <code>HTMLDivElement</code></dt>
<dd><p>Initial user-interface overlay div-el. Shows 2 buttons:</p>
<ol>
<li>Start Game - Starts game in normal mode.</li>
<li>Easy Mode - Starts game in easy mode.</li>
</ol>
</dd>
<dt><a href="#qwertyKB">qwertyKB</a> : <code>HTMLDivElement.&lt;HTMLDivElement.&lt;HTMLButtonElement&gt;&gt;</code></dt>
<dd><p>QWERTY keyboard used for larger screens.
div(#qwerty).div(.keyrow).button(.key)</p>
</dd>
<dt><a href="#abcdefKB">abcdefKB</a> : <code>HTMLDivElement.&lt;HTMLDivElement.&lt;HTMLButtonElement&gt;&gt;</code></dt>
<dd><p>ABCDEF keyboard used for smaller screens.
div(#abcdef).div(.keyrow).button(.key)</p>
</dd>
<dt><a href="#scoreboard">scoreboard</a> : <code>HTMLDivElement.&lt;HTMLOListElement.&lt;HTMLLIElement&gt;&gt;</code></dt>
<dd><p>Scoreboard shows number of attempts remaining
div(#scoreboard).ol.li(.tries)</p>
</dd>
</dl>

<a name="overlay"></a>

## overlay : <code>HTMLDivElement</code>
Initial user-interface overlay div-el. Shows 2 buttons:
1. Start Game - Starts game in normal mode.
2. Easy Mode - Starts game in easy mode.

**Kind**: global constant  
**Emits**: <code>event:overlayClick</code>  
<a name="qwertyKB"></a>

## qwertyKB : <code>HTMLDivElement.&lt;HTMLDivElement.&lt;HTMLButtonElement&gt;&gt;</code>
QWERTY keyboard used for larger screens.
div(#qwerty).div(.keyrow).button(.key)

**Kind**: global constant  
<a name="abcdefKB"></a>

## abcdefKB : <code>HTMLDivElement.&lt;HTMLDivElement.&lt;HTMLButtonElement&gt;&gt;</code>
ABCDEF keyboard used for smaller screens.
div(#abcdef).div(.keyrow).button(.key)

**Kind**: global constant  
<a name="scoreboard"></a>

## scoreboard : <code>HTMLDivElement.&lt;HTMLOListElement.&lt;HTMLLIElement&gt;&gt;</code>
Scoreboard shows number of attempts remaining
div(#scoreboard).ol.li(.tries)

**Kind**: global constant

<br/>
<br/>
<br/>
<br/>
<br/>

# Game.js - Auto-generated JSDoc3 Markdown
The markdown below was automatically generated using JSDoc3, and jsdoc-to-markdown.

<a name="Game"></a>

## Game
Game-class handling user-interface, phrases, and game-logic

**Kind**: global class  

* [Game](#Game)
    * [new Game()](#new_Game_new)
    * [.phraseIndices](#Game+phraseIndices) ⇒ <code>Array.&lt;Index&gt;</code>
    * [.setPhraseIndices()](#Game+setPhraseIndices)
    * [.startGame()](#Game+startGame)
    * [.getRandomPhrase()](#Game+getRandomPhrase) ⇒ <code>Object</code>
    * [.handleInteraction(key)](#Game+handleInteraction) ⇒ <code>null</code>
    * [.checkForWin()](#Game+checkForWin) ⇒ <code>Boolean</code>
    * [.removeLife()](#Game+removeLife)
    * [.gameOver()](#Game+gameOver)
    * [.resetKeys(keyList, className)](#Game+resetKeys)

<a name="new_Game_new"></a>

### new Game()
Create game instance.

<a name="Game+phraseIndices"></a>

### game.phraseIndices ⇒ <code>Array.&lt;Index&gt;</code>
Get local-storage array holding unused phrase-indices

**Kind**: instance property of [<code>Game</code>](#Game)  
**Returns**: <code>Array.&lt;Index&gt;</code> - Holds unused phrase indices  
<a name="Game+setPhraseIndices"></a>

### game.setPhraseIndices()
Set local-storage array holding unused phrase-indices

**Kind**: instance method of [<code>Game</code>](#Game)  
<a name="Game+startGame"></a>

### game.startGame()
Initialize game

**Kind**: instance method of [<code>Game</code>](#Game)  
<a name="Game+getRandomPhrase"></a>

### game.getRandomPhrase() ⇒ <code>Object</code>
Compute and return a random phrase-object

**Kind**: instance method of [<code>Game</code>](#Game)  
**Returns**: <code>Object</code> - Randomly-selected phrase-object  
<a name="Game+handleInteraction"></a>

### game.handleInteraction(key) ⇒ <code>null</code>
Handle user-interaction upon letter selection

**Kind**: instance method of [<code>Game</code>](#Game)  
**Returns**: <code>null</code> - Early return upon wrong letter selection  

| Param | Type |
| --- | --- |
| key | <code>HTMLButtonElement</code> | 

<a name="Game+checkForWin"></a>

### game.checkForWin() ⇒ <code>Boolean</code>
Check for win.

**Kind**: instance method of [<code>Game</code>](#Game)  
<a name="Game+removeLife"></a>

### game.removeLife()
Remove one heart-container, check for game loss.

**Kind**: instance method of [<code>Game</code>](#Game)  
<a name="Game+gameOver"></a>

### game.gameOver()
Game over.

**Kind**: instance method of [<code>Game</code>](#Game)  
<a name="Game+resetKeys"></a>

### game.resetKeys(keyList, className)
Reset keys.

**Kind**: instance method of [<code>Game</code>](#Game)  

| Param | Type | Description |
| --- | --- | --- |
| keyList | <code>NodeListOf.&lt;HTMLButtonElement&gt;</code> | User-selected keys. - Static node list of button-el's(.key) selected by user before game over |
| className | <code>string</code> | Key classname indicating button was selected ('wrong'|'chosen') |

<br/>
<br/>
<br/>
<br/>
<br/>

# Phrase.js - Auto-generated JSDoc3 Markdown
The markdown below was automatically generated using JSDoc3, and jsdoc-to-markdown.

<a name="Phrase"></a>

## Phrase
Phrase-class 
- Create an object from a phrase string
- Handle phrase display
- Test for contained letters

**Kind**: global class  

* [Phrase](#Phrase)
    * [new Phrase(phrase)](#new_Phrase_new)
    * [.addPhraseToDisplay()](#Phrase+addPhraseToDisplay)
    * [.checkLetter(letter)](#Phrase+checkLetter) ⇒ <code>boolean</code>
    * [.showMatchedLetter(letter)](#Phrase+showMatchedLetter)

<a name="new_Phrase_new"></a>

### new Phrase(phrase)
Phrase-object constructor


| Param | Type |
| --- | --- |
| phrase | <code>string</code> | 

<a name="Phrase+addPhraseToDisplay"></a>

### phrase.addPhraseToDisplay()
Add phrase to display.

**Kind**: instance method of [<code>Phrase</code>](#Phrase)  
<a name="Phrase+checkLetter"></a>

### phrase.checkLetter(letter) ⇒ <code>boolean</code>
Check letter.

**Kind**: instance method of [<code>Phrase</code>](#Phrase)  
**Returns**: <code>boolean</code> - - True if letter is included in phrase; else false.  

| Param | Type | Description |
| --- | --- | --- |
| letter | <code>String</code> | Single-character string |

<a name="Phrase+showMatchedLetter"></a>

### phrase.showMatchedLetter(letter)
Display matched letter.

**Kind**: instance method of [<code>Phrase</code>](#Phrase)  

| Param | Type |
| --- | --- |
| letter | <code>String</code> |