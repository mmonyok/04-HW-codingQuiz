let highScoreContainer = document.getElementById("highscoreDiv");
let listEl = document.getElementById("orderedList");
let homeEl = document.getElementById("home");


function obtainHighScore() {
    let storage = window.localStorage;
    if (JSON.parse(storage.getItem("scoreSet")) === null) {
        storage.setItem("scoreSet", JSON.stringify([]));
    }
    let storedScore = JSON.parse(storage.getItem("scoreSet"));
    console.log(typeof storedScore);
    storedScore.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(storedScore);

    for (i = 0; i < storedScore.length; i++) {
        listEl.appendChild(document.createElement("li"));
        listEl.children[i].textContent = (i + 1) + ". " + storedScore[i]["initials"] + " Scored " + storedScore[i]["score"];
    }
} 

obtainHighScore();

homeEl.addEventListener("click", function () {
    window.location.href="index.html";
})
