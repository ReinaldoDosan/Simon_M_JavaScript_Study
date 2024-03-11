/* game.js
==================================================
Guessing Game
==================================================
*/
'use strict';

window.onerror = function (message, url, line) {
    alert(`Error: ${message}\n${url}: ${line}`);
};

function random(max) {
    // returns a random number from 1 ... max
    return Math.floor(Math.random() * max) + 1;
}

init();
function init() {
    let button = document.querySelector('button#startgame');
    button.onclick = playGame;
}

function playGame() {
    //  Set up the data
    let answer, guess;
    let message;
    // Initialise
    // answer = 57;
    answer = random(100);
    message = 'Guess the Number';
    // Repeat
    do {
        guess = prompt(message);
        if (guess === null) return;
        if (guess < answer) {
            // Too Small
            // Plan A
            message = 'Too Low';
        }
        else if (guess > answer) {
            // Too Big
            // Plan B
            message = 'Too High';
        }
        else {
            // Correct
            // Plan Z
            alert('Correct');
        }
    } while (guess != answer);


    // The user guesses the number.
    // Check the number and tell the user
    //... until correct.    

}
/*
    let min, max;
    let answer, guess;
    let message;
    //  Initialise
    [min, max] = [1, 100];
    answer = random(100);
    message = 'Guess the Number';
    do {
        guess = prompt(`${message}\nFrom ${min} to ${max}`);
        if (guess === null) return 'game cancelled';
        guess = parseInt(guess) || 0;
        if (guess < answer) {
            message = 'Too Low';
            min = guess + 1;
        }
        //  Too Small
        else if (guess > answer) {   //  Too Big
            message = 'Too High';
            max = guess - 1;
        }
        else {
            //  Correct
            alert('Correct');
        }
    } while (guess != answer);
    return 'game over';
}


// user guesses
//Check and report

// ... until correct */

