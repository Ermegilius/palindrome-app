const wordChecker = (word: string): string => {
	const letters = word.toLocaleLowerCase().split("");
	const reversedLetters = [...letters].reverse();
	let message: string = "";

	for (let i = 0; i < letters.length; i++) {
		if (letters[i] !== reversedLetters[i]) {
			message = `${word} is NOT a palindrome!`;
		} else message = `${word} is a palindrome!`;
	}
	return message;
};

export default wordChecker;
