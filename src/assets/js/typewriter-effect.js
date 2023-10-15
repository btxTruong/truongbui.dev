class TypeWriter {
	constructor({element, sentences, characterCss = '', typeSpeed = 50, timeToRead = 2000}) {
		this.element = element;
		this.characterCss = characterCss;
		this.sentences = sentences;
		this.typeSpeed = typeSpeed;
		this.timeToRead = timeToRead;
		this.text = '';
	}

	run(sentenceIndex = 0, isDeleting = false) {
		if (sentenceIndex === this.sentences.length) {
			sentenceIndex = 0;
		}
		const currentSentence = this.sentences[sentenceIndex];

		if (isDeleting) {
			this.text = currentSentence.substring(0, this.text.length - 1);
		} else {
			this.text = currentSentence.substring(0, this.text.length + 1);
		}

		this.element.innerHTML = `<span class="${this.characterCss}">${this.text}</span>`;

		const reachEnd = this.text === currentSentence;
		const reachStart = this.text === '';

		const shouldDelete = isDeleting && reachStart ? false : !isDeleting && reachEnd ? true : isDeleting;

		const shouldGoToNextSentence = isDeleting && reachStart;
		const nextSentenceIndex = shouldGoToNextSentence ? sentenceIndex + 1 : sentenceIndex;

		const self = this;
		setTimeout(() => {
			self.run(nextSentenceIndex, shouldDelete);
		}, reachEnd ? self.timeToRead : self.typeSpeed);
	}
}

window.TypeWriter = TypeWriter;
