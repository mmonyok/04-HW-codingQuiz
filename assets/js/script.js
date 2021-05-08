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
let gameEndEl = document.getElementById("gameEnd");
let endMessageEl = document.getElementById("endMessage");
let finalScoreEl = document.getElementById("finalScore");
let secondsLeft = 60;
let i = 0;



// My array of questions and their respective answers.
let questionsArray =
    [{ question: "What is my favorite color", options: ["Blue", "yellow", "red", "green"], answer: "green"},

    { question: "Which of the below is not a type of JavaScript variable?", options: ["Boolean", "String", "Int", "Rope"], answer: "Rope" },

    { question: "Which is considered to be a 3rd party API?", options: ["HTML", "JavaScript", "CSS", "Bootstrap"], answer: "Bootstrap" },

    { question: "Which piece of code will allow you to 'read' its argument?", options: ["setInterval()", "document.querySelector()", "object{}", "console.log()"], answer: "console.log()" },

    { question: "Which is the order of broadest to narrowest CSS selectors?", options: [".class, #id, element, *", "element, .class, #id, *", "#id, .class, element, *", "*, element, .class, #id"], answer: "*, element, .class, #id" }];

//This function will include a countdown from 60
function timer() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds Left"

        if (secondsLeft < 0) {
            // Stops timer from counting down.
            clearInterval(timerInterval);
            // Calls end of quiz screen.
            gameLost();
        }
    }, 1000);
}

// This function determines what happens when the game is won.
function gameWin() {
    quizEl.style.display = "none";
    gameEndEl.style.display = "block";
    endMessageEl.textContent = "You've Won! &#128513";
    // need to get the finalScore variable set up to be equal to the final time left on clock.
    finalScoreEl.textContent = "Your final score is " + finalScore;
    //may need to make the form display if it is stuck on no display from the gameLost() function.
}

// This function determines what happens when the game is lost.
function gameLost() {
    quizEl.style.display = "none";
    gameEndEl.style.display = "block";
    endMessageEl.textContent = "You've Lost &#128557";
    gameEndEl.children[2].style.display = "none";
}

// To wipe content add the end of the quiz phase make the questionsAnswers.innerHTML = "" it will set that container to be empty. I think i don't need this since I am styling the display to none.

// This function will hold all of the randomly generated quiz options.
function buildQuiz() {

    document.querySelector("#question").textContent = questionsArray[i].question;
    document.querySelector("#answer1").textContent = questionsArray[i].options[0];
    document.querySelector("#answer2").textContent = questionsArray[i].options[1];
    document.querySelector("#answer3").textContent = questionsArray[i].options[2];
    document.querySelector("#answer4").textContent = questionsArray[i].options[3];

    timer();
};
console.log(button1);
button1.addEventListener("click", function () {
    if (button1.textContent === questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!";
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again.";
        secondsLeft -= 5;
        if (secondsLeft < 0) {
            timeEl = 0;
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
        if (secondsLeft < 0) {
            timeEl = 0;
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
        if (secondsLeft < 0) {
            timeEl = 0;
        }
    }
    return;
});

button4.addEventListener("click", function () {
    if (button4.textContent === questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
        if (secondsLeft < 0) {
            timeEl = 0;
        }
    }
    return;
});

startEl.addEventListener("click", function () {
    welcomeEl.style.display = "none";
    quizEl.style.display = "block";
    gameEndEl.style.display = "none";
    buildQuiz();
});