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
    [{ question: "What is my favorite color", option1: "Blue", option2: "yellow", option3: "red", answer: "green" },

    { question: "Which of the below is not a type of JavaScript variable?", option1: "Boolean", option2: "String", option3: "Int", answer: "Rope" },

    { question: "Which is considered to be a 3rd party API?", option1: "HTML", option2: "JavaScript", option3: "CSS", answer: "Bootstrap" },

    { question: "Which piece of code will allow you to 'read' its argument?", option1: "setInterval()", option2: "document.querySelector()", option3: "object{}", answer: "console.log()" },

    { question: "Which is the order of broadest to narrowest CSS selectors?", option1: ".class, #id, element, *", option2: "element, .class, #id, *", option3: "#id, .class, element, *", answer: "*, element, .class, #id" }];

//This function will include a countdown from 60
function timer() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds Left"

        if (secondsLeft === 0) {
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
    document.querySelector("#answer1").textContent = questionsArray[i].option1;
    document.querySelector("#answer2").textContent = questionsArray[i].option2;
    document.querySelector("#answer3").textContent = questionsArray[i].option3;
    document.querySelector("#answer4").textContent = questionsArray[i].answer;

    timer();
};

button1.addEventListener("click", function () {
    if (questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!";
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again.";
        secondsLeft -= 5;
    }
    return;
});

button2.addEventListener("click", function () {
    if (questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
    }
    return;
});

button3.addEventListener("click", function () {
    if (questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
    }
    return;
});

button4.addEventListener("click", function () {
    if (questionsArray[i].answer) {
        resultEl.textContent = "Correct Answer!"
        i++;
        buildQuiz();
    } else {
        resultEl.textContent = "Wrong Answer. Try Again."
        secondsLeft -= 5;
    }
    return;
});

startEl.addEventListener("click", function () {
    welcomeEl.style.display = "none";
    quizEl.style.display = "block";
    gameEndEl.style.display = "none";
    buildQuiz();
});