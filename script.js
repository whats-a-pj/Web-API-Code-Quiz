//selecting the start button on html file
var startBtn = document.querySelector("#start");

//selecting the submit button on html file
var submitBtn = document.querySelector("#save-score");

//hides quiz-area until user clicks start

// var quizAreaHide = function() {
    //
    // var quizBtnHide = document.getElementsByClassName(".quiz-btn")
    // quizBtnHide.setAttribute("display", "none");
     //quizBtnHide = true;
     // quizBtnHide.setAttribute("style", "display", "none");
    // var quizQHide = document.getElementById("#questions")
    // quizQHide.setAttribute("display", "none");
//     quizQHide = true;
//     // quizQHide.setAttribute("style", "display", "none");
// };

// quizAreaHide();

// var quizAreaShow = function() {
//     var quizBtnShow = document.getElementsByClassName(".quiz-btn").hidden = false;
//     // quizBtnShow.setAttribute("style", "display", "visible");
//     var quizQShow = document.getElementById("#questions").hidden = false;
//     // quizQShow.setAttribute("style", "display", "visible");
// }

//empty arrays based on user input
var userAnswers = [""];

// questions and answers written as an array of objects
var quizContents = [ 
    {
        question: "What does a .querySelector do?",
        choices: [ "Selects a question on the page", "Selects a specific element of an html file", "Selects every question on an html file", "Selects a specific element of a Javascript file"],
        answer: 1
    },
    {  
        question: "What method would you use to mix around the output of contents in an array?",
        choices: ["Math.mix", "randomInt", "randomArray", "Math.random"],
        answer: 3
    },
    {
        question: "What is a DOM?",
        choices: ["Document Object Module", "Document Options & Materials", "Document Object Model", "Document Orientation Mender"],
        answer: 2
    },
    {
        question: "What does an .addEventListener do?",
        choices: ["Runs a function or specified change to the page whenever an event is triggered by the user", "User's computer microphone listens for a command to run a function", "Runs a function every time a user listens to music on their computer", "Runs a function every time a user adds an event to their dateCalender"],
        answer: 0
    },
    {
        question: "What method would you use to change the appearance of an element without using the css file?",
        choices: [".setAttribute", ".changeElement", "setElement", ".changeAttribute"],
        answer: 0
    }
];

var currentQuestion = 0;

var score = 0;

var timer = document.querySelector(".timer");
var secondsLeft = 60;

function countDown() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
        if(secondsLeft === 0) 
        {
        clearInterval(timerInterval);
        } //else if (userAnswers !== correctAnswer)
        //{
            //secondsLeft = secondsLeft -5;
        //}
    }, 1000);
};



//todo create function that replaces .content2 with quizContents
//todo call that function inside of renderQuestions upon clicking start
// OR
//todo .setAttributes to quiz-area elements as hidden until user clicks start- then visible
//todo inside of the renderQuestions function, and hidden again when scoreboard populates


//todo add scoreTracker() to each eventlistener conditional to add up correctAnswer
var renderQuestions = function() {
    // quizQHide.removeAttribute("display", "none");
    // quizBtnHide.removeAttribute("display", "none");
    var questionBox = document.querySelector("#questions");
    var optionOne = document.querySelector("#answers1");
    var optionTwo = document.querySelector("#answers2");
    var optionThree = document.querySelector("#answers3");
    var optionFour = document.querySelector("#answers4");
    countDown();
        questionBox.textContent = quizContents[currentQuestion].question;
        optionOne.textContent = quizContents[currentQuestion].choices[0];
        optionTwo.textContent = quizContents[currentQuestion].choices[1];
        optionThree.textContent = quizContents[currentQuestion].choices[2];
        optionFour.textContent = quizContents[currentQuestion].choices[3];
        var correctAnswer = quizContents[currentQuestion].answer;
    optionOne.addEventListener("click", function() {
        //todo for each eventListener
        if (userAnswers === correctAnswer ) {
            //add 20 to scoreTracker()
            // OR
            // score = score + 20;
        }
        // } else (userAnswers !== correctAnswer) {
            //don't add to scoreTracker(), but -5 seconds 
            //secondsLeft = secondsLeft -5; ??
        // }
        currentQuestion++;
        renderQuestions();
        //scoreTracker();
    });
    optionTwo.addEventListener("click", function() {
        if (userAnswers === correctAnswer ) {
            //add 20 to scoreTracker()
            // OR
            // score = score + 20;
        }
        currentQuestion++;
        renderQuestions();
        //scoreTracker();
    });
    optionThree.addEventListener("click", function() {
        if (userAnswers === correctAnswer ) {
            //add 20 to scoreTracker()
            // OR
            // score = score + 20;
        }
        currentQuestion++;
        renderQuestions();
        //scoreTracker();
    });
    optionFour.addEventListener("click", function() {
        if (userAnswers === correctAnswer ) {
            //add 20 to scoreTracker()
            // OR
            // score = score + 20;
        }
        currentQuestion++;
        renderQuestions();
        //scoreTracker();
    });
    optionFive.addEventListener("click", function() {
        if (userAnswers === correctAnswer ) {
            //add 20 to scoreTracker()
            // OR
            // score = score + 20;
        }
        //todo add highScorePage() after user has exhausted all questions
        //highScorePage();
    });
    
};

startBtn.addEventListener("click", renderQuestions);

        //todo use scoreTracker function to add up correctAnswers
// var score = 0;
// userAnswers = 0;

// function scoreTracker() {
// var allAnswers = 20;
// for (let i = 0; i < correctAnswer.length; i++) {
//     userAnswers
//      userAnswers = correctAnswer + 20;
//quizContents.answer = 20pts each correct answer
//total of 100 pts if all correct

//todo show results with this function via the scoreTracker?
// 
// var highScorePage = function() {
//      var userScore = document.getElementbyId("#score");
// userScore.textContent = score + "/100";
//      userScore.textContent = document
//     }
// }

//submitBtn.addEventListener("click", /*highScorePage w/ localStorage set up*/);


// var allQuestions = [quizContents[0].question, quizContents[1].question, quizContents[2].question, quizContents[3].question, quizContents[4].question];
// var correctAnswers = [quizContents[0].answer, quizContents[1].answer, quizContents[2].answer, quizContents[3].answer, quizContents[4].answer];
