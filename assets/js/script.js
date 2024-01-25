// Global Declarations 
var btnEl = document.querySelector("#startgame");
var timeEl = document.getElementById("timerleft");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var resultsEl = document.getElementById("results");
var clearEl = document.getElementById("clear");
var qLabel = document.querySelector("#q");
var a1Label = document.querySelector("#a1");
var a2Label = document.querySelector("#a2");
var a3Label = document.querySelector("#a3");
var saveHS = document.querySelector("#save");
var secondsLeft = 30;
var clock;
var score = 0;
var HSnameIn = document.querySelector("#nameIN");
var HSname = document.querySelector("#nameIN").value;
var submitBtn = document.querySelector("#save");


// initiates the game
function startGame(event) {
  event.preventDefault();
// calls countdown clock function
  setTime();

// removes start game button and sets styling
  startEl.setAttribute("style", "display: none;");
  questionEl.setAttribute("style", "display: visible;");
  answersEl.setAttribute("style", "display: visible;");


  // loop thru questions  
  q1();
}

// Countdown clock function
function setTime() {
// Sets interval in variable

  clock = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Seconds left: " + secondsLeft;

// when countdown clock timer runs out remove game and show high score and save initials
    if(secondsLeft <= 0) {
      clearInterval(clock);
      endGame();
    }
  }, 1000);

}

// Answer is correct
function correctAnswer() {
  score = score + 20;
}

// Answer is incorrect
function incorrectAnswer() {
  secondsLeft = secondsLeft - 10;

  if (secondsLeft < 0) {
    secondsLeft = 0;
    timeEl.setAttribute("style", "display: none;");
    clearInterval(clock);
    endGame();
  }
}


// End Game and Record Name for High Score
function endGame() {
  questionEl.setAttribute("style", "display: none;");
  answersEl.setAttribute("style", "display: none;");
  resultsEl.setAttribute("style", "display: visible;");

  submitBtn.addEventListener("click", function() {
    if (HSname === "") {
        window.alert("error: Initials cannot be blank");
      } else {
        localStorage.setItem("Name", HSnameIn.value);
        localStorage.setItem("HighScore", score);
        resultsEl.setAttribute("style", "display: none;");
        clearEl.setAttribute("style", "display: visible;");
      }
  }, {once: true});
}

// Question 1
function q1() {
  qLabel.textContent = "1: What are the difference between “ == “ and “ === “ operators?";
  a1Label.textContent = "A: “==” is used to compare values whereas, “===“ is used to compare both values and types.";
  a2Label.textContent = "B: “===” is used to compare values whereas, “==“ is used to compare both values and types.";
  a3Label.textContent = "C: is no difference";
  answersEl.addEventListener("click", function(event) {
    if (event.target.id === "a1") {
      correctAnswer();
      q2();
    } else {
      incorrectAnswer();
      q2();
    }
  }, {once: true});
}

// Question 2
function q2() {
  qLabel.textContent = "2: What does NaN mean in JavaScript?";
  a1Label.textContent = "A: Nowhere and Not here";
  a2Label.textContent = "B: Not a Number";
  a3Label.textContent = "C: null";
  answersEl.addEventListener("click", function(event) {
    if (event.target.id === "a2") {
      correctAnswer();
      q3();
    } else {
      incorrectAnswer();
      q3();
    }
  }, {once: true});
}

// Question 3
function q3() {
  qLabel.textContent = "3: What is DOM?";
  a1Label.textContent = "A: Data Object Model";
  a2Label.textContent = "B: Champagne";
  a3Label.textContent = "C: Document Object Model";
  answersEl.addEventListener("click", function(event) {
    if (event.target.id === "a3") {
      correctAnswer();
      q4();
    } else {
      incorrectAnswer();
      q4();
    }
  }, {once: true});
}

// Question 4
function q4(){
  qLabel.textContent = "4: What is the correct way to declare a JavaScript variable?";
  a1Label.textContent = "A: const myVariable;";
  a2Label.textContent = "B: variable myVariable;";
  a3Label.textContent = "C: var myVariable;";
  answersEl.addEventListener("click", function(event) {
    if (event.target.id === "a3") {
      correctAnswer();
      q5();
    } else {
      endGame();
    }
  }, {once: true});
}

// Question 5
function q5() {
  qLabel.textContent = "5: question 5";
  a1Label.textContent = "A: false";
  a2Label.textContent = "B: true";
  a3Label.textContent = "C: both";
  answersEl.addEventListener("click", function(event) {
    if (event.target.id === "a1") {
      correctAnswer();
      endGame();
    } else {
      endGame();
    }
  }, {once: true}); 
}

// EventListener for button press to make a game
btnEl.addEventListener("click", startGame, {once: true});