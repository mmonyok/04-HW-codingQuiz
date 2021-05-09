// Global Variables
let button1 = document.getElementById("answer1");
let button2 = document.getElementById("answer2");
let button3 = document.getElementById("answer3");
let button4 = document.getElementById("answer4");
let timeEl = document.getElementById("timer");
let resultEl = document.getElementById("result");
let welcomeEl = document.getElementById("welcome");
let quizEl = document.getElementById("questionsAnswers");
let startEl = document.getElementById("startButton");
let tryAgainEl = document.getElementById("tryAgain");
let gameWonEl = document.getElementById("gameWon");
let gameLostEl = document.getElementById("gameLost");
let endMessageEl = document.getElementById("endMessage");
let finalScoreEl = document.getElementById("finalScore");
let formEl = document.getElementById("submitForm");
let initialsEl = document.getElementById("initials");
let submitButton = document.getElementById("submitInitials");
let secondsLeft = 60;
let i = 0;
let score = 0;

if (JSON.parse(localStorage.getItem("scoreSet")) === null) {
    localStorage.setItem("scoreSet", JSON.stringify([]));
}
let highestScore = JSON.parse(localStorage.getItem("scoreSet"));

// Sets all the page displays back to the beginning on page reload.
window.addEventListener("load", function () {
    welcomeEl.style.display = "block";
    quizEl.style.display = "none";
    gameWonEl.style.display = "none";
    gameLostEl.style.display = "none";
})

// My array of questions and their respective answers.
let questionsArray =
    [{ question: "An array is enclosed with what kind of brackets?", options: ["{}", "[]", "()", "< >", ], answer: "[]" },

    { question: "Which of the below is not a type of JavaScript variable?", options: ["Boolean", "Rope", "String", "Int"], answer: "Rope" },

    { question: "Which is considered to be a 3rd party API?", options: ["Bootstrap", "HTML", "JavaScript", "CSS"], answer: "Bootstrap" },

    { question: "Which piece of code will allow you to 'read' its argument?", options: ["setInterval()", "document.querySelector()", "console.log()", "object{}"], answer: "console.log()" },

    { question: "Which is the order of broadest to narrowest CSS selectors?", options: [".class, #id, element, *", "element, .class, #id, *", "#id, .class, element, *", "*, element, .class, #id"], answer: "*, element, .class, #id" }];

// This handles everything to do with the timer.
function timer() {
    let timerInterval = setInterval(function () {
        if (secondsLeft < 0) {
            // Stops timer from counting down.
            clearInterval(timerInterval);
            // Calls end of quiz screen.
            gameLost();
            // This will stop the time if the last correct question has been input.  
        } else if (i >= questionsArray.length) {
            clearInterval(timerInterval);
            // Just continues the countdown until one of the other if statements becomes true.    
        } else {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " Seconds Left"
        }
    }, 1000);
    return;
}

// This function determines what happens when the game is won.
function gameWin() {
    score = secondsLeft;
    quizEl.style.display = "none";
    gameWonEl.style.display = "block";
    finalScoreEl.textContent = "Your final score is " + score;
    return;
}

// This function determines what happens when the game is lost.
function gameLost() {
    quizEl.style.display = "none";
    gameLostEl.style.display = "block";
    return;
}

// This function will hold all of the generated quiz questions and answer options.
function buildQuiz() {
    if (i === questionsArray.length) {
        gameWin();
    } else {
        document.querySelector("#question").textContent = questionsArray[i].question;
        document.querySelector("#answer1").textContent = questionsArray[i].options[0];
        document.querySelector("#answer2").textContent = questionsArray[i].options[1];
        document.querySelector("#answer3").textContent = questionsArray[i].options[2];
        document.querySelector("#answer4").textContent = questionsArray[i].options[3];
    }
    return;
};

// These are the buttons, and what happens when you click on their answers.
button1.addEventListener("click", function () {
    if (button1.textContent === questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!";
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again.";
        secondsLeft -= 5;
        if (secondsLeft <= 0) {
            timeEl.textContent = 0;
        }
    }
    return;
});

button2.addEventListener("click", function () {
    if (button2.textContent === questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
        if (secondsLeft <= 0) {
            timeEl.textContent = 0;
        }
    }
    return;
});

button3.addEventListener("click", function () {
    if (button3.textContent === questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
        if (secondsLeft <= 0) {
            timeEl.textContent = 0;
        }
    }
    return;
});

button4.addEventListener("click", function () {
    if (button4.textContent === questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        console.log("i is = to " + i);
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
        if (secondsLeft <= 0) {
            timeEl.textContent = 0;
        }
    }
    return;
});

// This will reset variables, set current display to the quiz container, start the timer, and generate the first questions for the quiz.
function startQuiz() {
    secondsLeft = 60;
    i = 0;
    welcomeEl.style.display = "none";
    quizEl.style.display = "block";
    gameWonEl.style.display = "none";
    gameLostEl.style.display = "none";
    timer();
    buildQuiz();
    return;
}

// Handles my high score storing.
function storeHighScore(event) {
    event.preventDefault();
    let initial = initialsEl.value;
    let scoreObject = {
        "initials": initial,
        "score": score};
        console.log(highestScore);
    highestScore.push(scoreObject);
    localStorage.setItem("scoreSet", JSON.stringify(highestScore));
    // This will make the page go to the highscore page once the score is submitted.
    window.location.href="highScore.html";
}

// These are the event listeners for the start quiz and try again buttons.
startEl.addEventListener("click", startQuiz);
tryAgainEl.addEventListener("click", startQuiz);

// This will submit the score and start the local storage sequence.
submitButton.addEventListener("click", storeHighScore);