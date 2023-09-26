var pkmon = document.querySelector(".altPkmon");

var A = document.querySelector("#optionA");
var B = document.querySelector("#optionB");
var C = document.querySelector("#optionC");
var D = document.querySelector("#optionD");
// var questionCard = document.querySelector(".card");

var question = document.querySelector("#question")

var timerSeconds = 60;
var score = 0;
var timeLeftElement = document.getElementById("timeLeft");

// **idea 
var currentQuestionIndex = 0;
var timerInterval;
var timerSeconds = 60;
var score = 0;
var startButton = document.getElementById("startButton");

var endCard = document.getElementById("end");
var timeLeftElement = document.getElementById("timeLeft");
// **idea 



//*image bank
var index = 0;
var currentImage;
var images = [
    "assets/img/squirtle.png",
    "assets/img/eevee.png",
    "assets/img/dragonite.png",
    "assets/img/pika.png"
  ];

//*question logic

  var questions = [
{
    choices1: ["pika","2","3","4"],
    answer1: "pika",
    
},
{
    choices2: ["1","pika","3","4"],
    answer1: "pika",
    
},
{
    choices3: ["1","2","pika","4"],
    answer1: "pika",
    
},
{
    choices4: ["1","2","3","pika"],
    answer1: "pika",
    
},
  ];
    





// **start button 

  startButton.addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    question.style.display = "block";
    startTimer();
    displayQuestion();
  });







//   function linkButtons() {
//     var firstQuestion = questions.choices1;

//     if (firstQuestion.length >= 4) {
//         // Set the text content of each button
//         A.textContent = firstQuestion[0];
//         B.textContent = firstQuestion[1];
//         C.textContent = firstQuestion[2];
//         D.textContent = firstQuestion[3];
//       }
//     }
// linkButtons()
// //*buttons linked







// **timer logic 

function startTimer() {
    timerInterval = setInterval(function () {
      timerSeconds--;
      timeLeftElement.textContent = timerSeconds;
  
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000); 
  }







//   var card = document.querySelector(".card");

// var myDiv = document.getElementById("myDiv");
// **************
// var toggleButton = document.getElementById("toggleButton");
// toggleButton.addEventListener("click", function() {
//   var currentDisplay = myDiv.style.display;
//   if (currentDisplay === "none" || currentDisplay === "") {
//     myDiv.style.display = "block";
//   } else {
//     myDiv.style.display = "none";
//   }
// });


// imageContainer.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches("img")) {
//       var state = element.getAttribute("data-state");
//       if (state === "still") {
//         element.dataset.state = "animate";
//         element.setAttribute("data-state", "animate");
//         element.setAttribute("src", element.dataset.animate);
//       } else {
//         element.dataset.state = "still";
//         element.setAttribute("src", element.dataset.still);
//       }
//     }
//   });


//*for hide/show on button click */

//   card.addEventListener("click", function(event) {

//     console.log("Clicked on:", event.target);


//     var element = event.target;
//     if (element.matches("button")) {
//         var state = element.getAttribute("data-state");

//         console.log("Data-state attribute:", state);


//         if (state === "shown") {
//             element.dataset.state = "hidden";
//       element.setAttribute("data-state", "hidden");
//       element.setAttribute("src", element.dataset.hidden);
//     } else {
//         element.dataset.state = "shown";
//         element.setAttribute("src", element.dataset.shown);
//       }
//     }
//   });




//*pkmon images go here
pkmon.style.backgroundImage = "assets/img/pika.png";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  pkmon.style.backgroundImage = "url('" + currentImage + "')";
}


pkmon.addEventListener("click", function(event) {
 event.stopPropagation();

  navigate(1);

});








//*navigate is temp for pkmon image load
  navigate(0);



  








// **idea to link hide/show to html and CSS

// ***Get references to the button and the element to toggle
// var toggleButton = document.getElementById('toggleButton');
// var elementToToggle = document.getElementById('elementToToggle');

// *****Add a click event listener to the button
// toggleButton.addEventListener('click', function() {
// ****Check the current display style of the element
//     var currentDisplayStyle = getComputedStyle(elementToToggle).display;

//  ****Toggle the display property
//     if (currentDisplayStyle === 'none') {
// **If it's hidden, show it
//         elementToToggle.style.display = 'block'; 
//  **block just example
//     } else {
// **If it's shown, hide it
//         elementToToggle.style.display = 'none';
//     }
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


//TODO make an if statement that says if choice === !answer deduct 10 from time-left until time =0


//TODO make a conditional that says once time-left >= 0 alert you lose


//TODO make a if statement that says once last question is answered take the time left as a score and put it in local storage


//TODO once they get their score let them add 3 letters for initials and add that as a key and use the score as the value


//TODO make a high-score list on page using a getItem from both the key and value and display that.


//TODO create a function that will display the next question and choices once they answer the following question


//TODO create a start button that wont display the questions until 

