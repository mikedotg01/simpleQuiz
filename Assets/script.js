//alert explaining the game. 

// alert('Hi! You are about to begin your quiz for Coding101. \nPlease click "Ok" to move out of this "alert()", and click on the "Start" button when you are ready to begin.')


//lets add global variables. 
    var timer = document.getElementById('time');
    var startBtn = document.getElementById('startBtn');
    var h2e = document.getElementById('headline');
    var quizCont = document.getElementById('quizCont');

//global variable for secondsLeft. 
var secondsLeft = 30;

// when i click on the start()
startBtn.addEventListener("click", function() {
setTime();
startQuiz();
})




// timer starts // setTime();
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        h2e.textContent = secondsLeft + "s left."; // displays how much is left in <h2>
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


//variable to get index quesAndAns
var questions = document.getElementById('questions');
var btnA = document.getElementById('btnA');
var btnB = document.getElementById('btnB');
var btnC = document.getElementById('btnC');
var btnD = document.getElementById('btnD');

// variables for questions and answers. linked to index. 
    qs = ['Who invented javascript?','What is javascript?'];
    A = ['Larry Page', 'the brain of web design'];
    B = ['Juan Epstein','a programming language'];
    C = ['Brandon Eich',' a starbucks coffee option'];
    D = ['James Gosling','an application you can download'];
    correctAns = ['Brandon Eich', 'a programming language']

//  variable for index = 0
var index = 0

//need to push the questions/choices into their corresponding class. on event -> button clicked
function startQuiz(){
for ( i = 0 ; i < qs.length ; i++){


    questions.textContent = qs[index];
    btnA.textContent = A[index];
    btnB.textContent = B[index];
    btnC.textContent = C[index];
    btnD.textContent = D[index];

    console.log(index, btnA, btnB, btnC, btnD);

    // this will make the loop continue.
    // index++;
}
};

//verify if the answer clicked matches correct answer
quizCont.addEventListener('click', function (event){
    if (event.target.matches('.btn')){
if ( correctAns[index] === event.target.textContent){

alert('correct') 
// if it matches send to next question, and add to scorecount

    // scoreCount++;
    // index++
} else {
    alert('wrong');
// if wrong then deduct, 5 seconds. 
    // secondsLeft = secondsLeft - 5;

    // index++
}

}
})

// user score would be scoreCount() + secondsLeft. 



