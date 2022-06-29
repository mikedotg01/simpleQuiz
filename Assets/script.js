// lets start with a simple alert explaining the game. 
// alert('Hi! You are about to begin your quiz for Coding101. \nPlease click "Ok" to move out of this "alert()", and click on the "Start" button when you are ready to begin.')

//variables pulling from HTML
var timer = document.getElementById('time');
var startBtn = document.getElementById('startBtn');
var h2e = document.getElementById('headline');


//global variable for secondsLeft. 
var secondsLeft = 30;

// when i click on the start()
startBtn.addEventListener("click", function() {
    setTime();


})


// the quiz variables

var questions = [];
var answerA = [];
var answerB = [];
var answerC = [];
var answerD = [];
var rightAns = [];


// timer starts // setTime();
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        // timer.textContent = secondsLeft + "s left.";
        h2e.textContent = secondsLeft + "s left.";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append message stating times up. 
            sendMessage();
        }
    }, 1000);

// alerts() - when time is up
function sendMessage() {
    h2e.textContent = " GAME OVER! ";
    alert('Times Up!')
};
}


// starts the quize, and will display the time left on
//need to push the questions/choices into their corresponding class. 

//on event -> button clicked 

//verify if the answer clicked matches correct answer
// if it matches send to next question, and add to scorecount
// if wrong then deduct, 5 seconds. 
// user score would be scoreCount() + secondsLeft. 






