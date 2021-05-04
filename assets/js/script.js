// Variables

//This function will include a countdown from 60
function timer() {

}

// This function determines what happens when the game is won.
function gameWin() {
    // Need to have it so that it loads the game over screen. 
}

// This function determines what happens when the game is lost.
function gameLost() {

}

// This will loop through the quiz options, score points and decide if game is won or lost.
function runQuiz() {

    if () {
        gameWin();
    } else {
        gameLose();
    }
}

// This function will hold all of the randomly generated quiz options. I may just do the same 5 questions if I run out of time and just have their order randomly generated. I it will likely a some sort of loop in it.
function buildQuiz() {

    runQuiz();
    timer();
}

// This function will initialize the quiz; this may redundant, so I might delete.
function init() {
    buildQuiz();
}

// Add event listener that on click it starts the init function.