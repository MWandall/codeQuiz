var pkmon = document.createElement("img");

var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
// var questionCard = document.querySelector(".card");

var qCard = document.querySelector("#question")
var endCard = document.querySelector("#end")
var buttonClick = document.querySelector(".buttonClick")
var score = document.querySelector(".score")
var timeFinal = document.querySelector("#timeFinal")

// var timerInterval;
var timerSeconds = 60;
var score = 0;
var timeLeftElement = document.getElementById("timeLeft");

// **idea 




// var endCard = document.getElementById("end");

// **idea 



//*image bank
var imgIndex = 0;
var currentImage;
var images = [
    "assets/img/pika.png",
    "assets/img/squirtle.png",
    "assets/img/eevee.png",
    "assets/img/dragonite.png",
    
  ];


  pkmon.setAttribute("src", images[0]);
  pkmon.setAttribute("alt", "Pikachu, Squirtle, Eevee, Dragonite respectively");

//*question logic
var currentQuestionIndex = 0;
  var questions = [
{
    choices: ["Pikachu","Gastly","Meouth","Vulpix"],
    answer: "Pikachu",
    
},
{
    choices: ["Ditto","Polywag","Mankey","Squirtle"],
    answer: "Squirtle",
    
},
{
    choices: ["Raticate","Eevee","Dotrio","Gloom"],
    answer: "Eevee",
    
},
{
    choices: ["Dragonair","Jolteon","Pidgy","Dragonite"],
    answer: "Dragonite",
    
},
  ];
    




  var startButton = document.getElementById("startButton");
// **start button 

  startButton.addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    qCard.style.display = "block";
    startTimer();
    displayQuestion();
  });


// *****whats with index? ******************************************************


  function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
       // Set the image URL
    
        // Update buttons' text content with answer choices
        optionA.textContent = "A: " + currentQuestion.choices[0];
        optionB.textContent = "B: " + currentQuestion.choices[1];
        optionC.textContent = "C: " + currentQuestion.choices[2];
        optionD.textContent = "D: " + currentQuestion.choices[3];

        pkmon.src = images[currentQuestionIndex];
      }
    }
    

  buttonClick.addEventListener("click", function () {
    var selectedAnswer = questions.choices; 
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      document.getElementById("correct-wrong").textcontent = "correct";
    } else {

  timerSeconds -= 10; 
  document.getElementById("correct-wrong").textcontent = "wrong";
}
    
currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
});


// **timer logic 

function startTimer() {
    timerInterval = setInterval(function () {
      timerSeconds--;
      timeLeftElement.textContent = "Timer: " + timerSeconds;
  
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000); 
  }





  function endGame() {
    qCard.style.display = "none";
    endCard.style.display = "block";
    timeLeftElement = timeFinal
    clearInterval(timerInterval);
    timeFinal.textContent = timerSeconds;
  }

document.querySelector("#save")
save.addEventListener("click", function () {
    var playerInitials = document.getElementById("initials").value;
      // Store the player's name and score
      // var highScoreElement = document.getElementById("highScore");
      var savedScoreElement = document.getElementById("saved-score");
      var savedInitialsElement = document.getElementById("saved-initials");
  
      savedScoreElement.textContent = score;
      savedInitialsElement.textContent = playerInitials;
  

    //   highScoreElement.style.display = "block";
    } 
  );


// var highScoreCard = document.querySelector("highScoreCard")
// var scoreLink = document.querySelector("#scoreLink");
// scoreLink.addEventListener("click", function () {
//     // document.getElementById("end").style.display = "none";
//     highScoreCard.style.display = "block";
// });






//* AS A coding boot camp student
// *I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// *SO THAT I can gauge my progress compared to my peers


// *GIVEN I am taking a code quiz
// *WHEN I click the start button
// *THEN a timer starts and I am presented with a question
// *WHEN I answer a question
// *THEN I am presented with another question
// *WHEN I answer a question incorrectly
// *THEN time is subtracted from the clock
// *WHEN all questions are answered or the timer reaches 0
// *THEN the game is over
// *WHEN the game is over
// *THEN I can save my initials and my score



