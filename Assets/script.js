// alert explaining the game

// running variable list
var h2e = document.getElementById('headline');
var ulBtn = document.getElementById("btn");
var options1 = document.getElementById('options');
var popUpMes = document.getElementById('popUpMes')
var correctCont = document.getElementById('correct');
var incorrectCont = document.getElementById ('inCorrect');
var secondsLeft = 31;
var scoreCount;


//user clicks the start button:
startBtn.addEventListener("click", function () {
    startTimer();
    // options1.classList.remove('hideMe');

});

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        h2e.textContent = secondsLeft + "s left."; // displays how much is left in <h2>
        //if the timer hits 0
        if (secondsLeft === 0) {
            index = 0;
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
    //lets build out our quiz
    function showQuiz() {

        //Questions and answers
        // variables for questions and answers. linked to index. 
        qs = ['Who invented javascript?', 'What is javascript?', 'How do you target a specific id tag in js', 'what would console.log("courseUrl") print?'];
        A = ['Larry Page', 'the brain of web design', 'document.getElementById("idName")', 'the data in the variable courseUrl'];
        B = ['Juan Epstein', 'a programming language','document.getElementByid("idName")', 'the course Url'];
        C = ['Brandon Eich', ' a starbucks coffee option', 'document.getElementById("idName")', ' a string: courseUrl'];
        D = ['James Gosling', 'an application you can download', 'document.getElementById("className")', ' a function courseUrl'];
        correctAns = ['Brandon Eich', 'a programming language', 'document.getElementById("idName")', ' a string: courseUrl'];

        //variables for positions. 
        //variable to get index quesAndAns
        var quizCont = document.getElementById('quizCont');
        var questions = document.getElementById('questions');
        var btnA = document.getElementById('btnA');
        var btnB = document.getElementById('btnB');
        var btnC = document.getElementById('btnC');
        var btnD = document.getElementById('btnD');

        scoreCount = 0
        index = 0

        // function to display the quiz and it's questions. 
        // think of adding a do...while or a while loop here. ie: while (index < qs[length])
        var displaQuiz = function () {
            questions.textContent = qs[index];
            btnA.textContent = A[index];
            btnB.textContent = B[index];
            btnC.textContent = C[index];
            btnD.textContent = D[index];
            // think of an if( index == qs.length ) 
            if (index == qs.length) {
                //reset index
                index = 0;
                h2e.textContent = 'Quiz Over';
                questions.textContent = "Congrats! You've completed your first coding quiz! " + "You scored: " + scoreCount + " out of " + qs.length ;
                options1.classList.add('hideMe');
                // possibly clear timerinterval?
                clearInterval(timerInterval);


            }

        }
        displaQuiz();


        // addEventListener to buttons inside the quizContaner
        quizCont.addEventListener('click', function (event) {
            if (event.target.matches('.btn')) {


                var correctCont = document.getElementById('correct');
                    var incorrectCont = document.getElementById ('inCorrect');
                    var popUpMes = document.getElementById('popUpMes');
                if (correctAns[index] === event.target.textContent) {

            // create els
            // if ( ){} else if();
                        popUpMes.removeAttribute('class');
                        correctCont.removeAttribute('class');
                        setTimeout(function(){
                            correctCont.setAttribute('class','hideMe');
                            popUpMes.setAttribute('class','hideMe')
                        }, 1500);

                    // this needs to be seen on screen. 
                    console.log('crt');
                    scoreCount++;
                    console.log('score: ' + scoreCount)
                } else {
                    // this needs to be shown on screen. 
                    console.log('wrg');
                    popUpMes.removeAttribute('class');
                    incorrectCont.removeAttribute('class');
                    setTimeout(function(){
                        incorrectCont.setAttribute('class','hideMe');
                        popUpMes.setAttribute('class','hideMe')
                    }, 1500);

                    // need to remove time from clock.
                    if (secondsLeft > 5 && secondsLeft > 0) {
                        secondsLeft = secondsLeft - 5;
                    }
                };
            };
            index++;
            displaQuiz();
        });
    };
    showQuiz();
}

var submitBtn = document.getElementById('submitBtn');
var storeName = function (){
    var nameList = document.getElementById('nameList');
    var initials = document.getElementById('initials').value;
    var newScore = {name:initials, score:scoreCount};
    var scoreArray = JSON.parse(localStorage.getItem("highscores")) || [];
    scoreArray.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(scoreArray));
};

function displayScore(){
    var nameList = document.getElementById('nameList');
    var scoreArray = JSON.parse(localStorage.getItem("highscores")) || [];
    scoreArray.forEach(element => {
        var listItem = document.createElement('li');
        listItem.textContent = element.name + ' ' + element.score
        nameList.appendChild(listItem);
    });
};
displayScore();

submitBtn.onclick = storeName