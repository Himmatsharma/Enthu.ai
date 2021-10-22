/* Select data from button*/
const button1 = document.querySelector('#p1button');
const button2 = document.querySelector('#p2button');

/* Display value */
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');

/*Select game target */
const gameTarget = document.querySelector('#gameTarget');
/* Reset button */

const reset = document.querySelector('#reset');

/* Add defalut secore*/
let p1score = 0;
let p2score = 0;

/* winning score*/
let winningScore = 5;

/* Game over */
let isGameOver = false;

/* Add events for button 1 */
button1.addEventListener('click', function () {

    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;

            /* Add class of css */
            p1display.classList.add('winner');
            p2display.classList.add('looser');

        }
        /* chnage context of value*/
        p1display.textContent = p1score;
    }

});

/* Add events for button 2 */
button2.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
            // /* Add class of css */
            p2display.classList.add('winner');
            p1display.classList.add('looser');
        }
        /* chnage context of value*/
        p2display.textContent = p2score;
    }
});

/* Add events for change the target of game */
gameTarget.addEventListener('change', function () {
    /* Get value from html on change */
    winningScore = parseInt(this.value);
    resetf();
});

/* Add events for button reset*/
reset.addEventListener('click', resetf);

// /* function for reset button */
function resetf() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p2display.classList.remove('winner', 'looser');
    p1display.classList.remove('winner', 'looser');

}