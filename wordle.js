// script.js
document.addEventListener('DOMContentLoaded', function () {
    const words = ['ocean', 'paina', 'hawaii', 'island', 'culinary']; // List of words for the game
    let selectedWord = words[Math.floor(Math.random() * words.length)]; // Choose a random word
    let wordDisplay = document.getElementById('word-display');
    let guessInput = document.getElementById('guess-input');
    let guessBtn = document.getElementById('guess-btn');
    let resultDiv = document.getElementById('result');
    let attempts = 5; // Number of attempts allowed

    // Initialize the word display
    let displayWord = '';
    for (let i = 0; i < selectedWord.length; i++) {
        displayWord += '*';
    }
    wordDisplay.textContent = displayWord;

    // Function to check the guess
    function checkGuess() {
        let guess = guessInput.value.toLowerCase();
        if (guess.length !== 5 || !/^[a-zA-Z]+$/.test(guess)) {
            resultDiv.textContent = 'Please enter a valid 5-letter word.';
            return;
        }
        if (guess === selectedWord) {
            resultDiv.textContent = 'Congratulations! You guessed the word!';
        } else {
            attempts--;
            if (attempts === 0) {
                resultDiv.textContent = `Sorry, you're out of attempts. The word was "${selectedWord}".`;
            } else {
                resultDiv.textContent = `Incorrect guess. ${attempts} attempts remaining.`;
            }
        }
        guessInput.value = '';
    }

    // Event listener for guess button click
    guessBtn.addEventListener('click', checkGuess);
});
