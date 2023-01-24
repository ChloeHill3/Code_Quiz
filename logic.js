// Global variables
let startBtnEl = document.getElementById("start");
let countdownEl = document.getElementById("time");
let timerDiv = document.getElementsByClassName("timer")
let questionsDiv = document.getElementById("questions");
let answerBtns = document.getElementById("answer-buttons")
let createUl = document.createElement("ul");
let startScreenDiv = document.getElementById("start-screen")
let choicesEl = document.getElementById("choices")
let questionTitleEl = document.getElementById("question-title")
let nextBtn = document.getElementById("next-btn")
let finalScoreP = document.getElementById("final-score")
let highScore = document.getElementById("highscores");
let clearBtn = document.getElementById("clear");
let goBack = document.getElementById("goback");
let score = 0;
let questionIndex = 0;
let timeRemaining = 76;
let startTime = 0;
let penalty = 10;

// Triggers timer on button, shows user a display on the screen
startBtnEl.addEventListener("click", loadQuiz);
nextBtn.addEventListener("click", () => {
   questionIndex++;
   returnNextQuestion();
});

function countdown(){
   timeRemaining--;
   timerDiv.textContent = "Time:  " + timeRemaining;
   if (timeRemaining <= 0 ){
      saveScores();
   } 

}

function loadQuiz() {
   startTime = setInterval(countdown, 1000);
   startScreenDiv.classList.add("hide");
   questionsDiv.classList.remove("hide");
   countdown()
   returnNextQuestion();
  
}

function returnNextQuestion(){
   resetToOriginal();
   displayQuestion();
}

function displayQuestion(question){
   questionTitleEl.innerText = question.question
   question.answers.forEach(answer => {
      let button = document.createElement("button")
      button.innerText = answer.text
      button.classList.add("btn")

      if (answer === true){
         button.addEventListener("click", selectAnswer)
         answerBtns.appendChild(button)
      }
      
   });
}
// function returnNextQuestion();
// function saveScores();
function resetToOriginal(){
}


