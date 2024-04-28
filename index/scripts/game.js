/* game.js
==================================================
Guessing Game
==================================================
*/
'use strict';

window.onerror = function (message, url, line) {
    alert(`Error: ${message}\n${url}: ${line}`);
};


init();
function init() {
    let button = document.querySelector('button#startgame');
    button.onclick = playGame;
}

function playGame() {
    //  Set up the data
    let min, max;
    let answer, guess;
    let message;

    // Initialise
    // answer = 57;
    [min, max] = [1, 100]; // alternatively: min=1;
    max = 100;
    answer = random(max);
    message = 'Guess the Number';
    //return 'game over';
    // Repeat
    do {
        guess = prompt(`${message}\nFrom ${min} to ${max}`);

        if (guess === null) return `Game Cancelled`;
        guess = parseInt(guess) || 0; // covert to a number
        if (guess < answer) {
            // Too Small
            // Plan A
            message = 'Too Low';
            min = guess + 1;
        }
        else if (guess > answer) {
            // Too Big
            // Plan B
            message = 'Too High';
            max = guess - 1;
        }
        else {
            // Correct
            // Plan Z
            alert('Correct');
        }
    } while (guess != answer);

    return `Game Over`;

    // The user guesses the number.
    // Check the number and tell the user
    //... until correct.    

}
