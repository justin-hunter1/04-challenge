// Global Declarations 
var formEl  = document.getElementById("form");
var gameboard = document.getElementById("gamearea");
var btnEl = document.querySelector("#startgame");
var questionEl = document.getElementById("question");
var timeEl = document.getElementById("timerleft");
var saveHS = document.querySelector("#save");
var secondsLeft = 30;
var score = 0
var questions = ["One", "Two", "Three", "Four"];
var initchoices = ["A;B;C", "B;A;C", "C;B;A"];
var initanswers = ["t;f;f", "f;t;f", "f;f;t;"]; //f= incorrect; t= correct


// EventListener for button press to make a game
  btnEl.addEventListener("click", startGame);


// initiates the game
function startGame(event) {
// calls countdown clock function
  setTime();

// removes start game button and sets styling
  btnEl.remove();
  gameboard.classList.remove("container");
  gameboard.setAttribute("class","box");

  // loop thru questions  
  for(var i = 0; i < questions.length; i++) {
    var q = i;
    playGame(q);
    event.preventDefault();
  }
}

// Countdown clock function
function setTime() {
// Sets interval in variable

  var clock = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Seconds left: " + secondsLeft;

// when countdown clock timer runs out remove game and show high score and save initials
    if(secondsLeft <= 0) {
      clearInterval(clock);

      timeEl.children.visibility = "none";
      timeEl.textContent = "Game Over";
      gameboard.remove();
      formEl.style.visibility = "visible";
      saveHS.addEventListener("click", endGame);
    }

  }, 1000);

}

function playGame(q) {
  var q;
  questionEl.textContent = "Question: " + questions[q];

  var choices = initchoices[q].split(";");
  var answers = initanswers[q].split(';');
  
  for (var i = 0; i < choices.length; i++) {
    var value = i + 1;
    var guessbtnEl = document.createElement("button");
    guessbtnEl.textContent = choices[i];
    guessbtnEl.setAttribute("value", value);
    guessbtnEl.setAttribute("id", answers[i]);
    guessbtnEl.setAttribute("class","button");
    questionEl.appendChild(guessbtnEl);
  }
  var btnElT = document.querySelector("#t");
  var btnElF = document.querySelectorAll("#f");
  btnElT.addEventListener("click", function () {
    console.log("you selected the answer!");
    score++;
    q++;
  });

  btnElF.forEach(function(btnElF) {
    btnElF.addEventListener("click", function() {
      secondsLeft = secondsLeft - 10;
      q++;
    })
  });
  return;
}



function endGame(event) {
  event.preventDefault();
  var HSnameIn = document.querySelector("#nameIN")
  var HSname = document.querySelector("#nameIN").value;


  if (HSname === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    localStorage.setItem("Name", HSnameIn.value);
    localStorage.setItem("HighScore", score);
  }

}