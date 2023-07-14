//selecting the start button on html file
var startBtn = document.querySelector("#start");

//selecting the submit button on html file
var submitBtn = document.querySelector("#save-score");

//hides #quiz-area until renderQuestions() is ran
document.querySelector("#quiz-area").style = "display: none"

//hides #scoreboard until endQuiz() is ran
document.querySelector("#scoreboard").style = "display: none"

//selecting the h1 and button ids in #quiz-area
var questionBox = document.querySelector("#questions");
var optionOne = document.querySelector("#answers1");
var optionTwo = document.querySelector("#answers2");
var optionThree = document.querySelector("#answers3");
var optionFour = document.querySelector("#answers4");

//empty arrays based on user input
var userAnswers = [""];

//sets score to localstorage
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// questions and answers written as an array of objects
var quizContents = [ 
    {
        question: "What does a .querySelector do?",
        choices: [ "Selects a question on the page", "Selects a specific element of an html file", "Selects every question on an html file", "Selects a specific element of a Javascript file"],
        answer: "Selects a specific element of an html file"
    },
    {  
        question: "What method would you use to mix around the output of contents in an array?",
        choices: ["Math.mix", "randomInt", "randomArray", "Math.random"],
        answer: "Math.random"
    },
    {
        question: "What is a DOM?",
        choices: ["Document Object Module", "Document Options & Materials", "Document Object Model", "Document Orientation Mender"],
        answer: "Document Object Model"
    },
    {
        question: "What does an .addEventListener do?",
        choices: ["Runs a function or specified change to the page whenever an event is triggered by the user", "User's computer microphone listens for a command to run a function", "Runs a function every time a user listens to music on their computer", "Runs a function every time a user adds an event to their dateCalender"],
        answer: "Runs a function or specified change to the page whenever an event is triggered by the user"
    },
    {
        question: "What method would you use to change the appearance of an element without using the css file?",
        choices: [".setAttribute", ".changeElement", "setElement", ".changeAttribute"],
        answer: ".setAttribute"
    }
];

//value set to 0 so that the renderQuestions function fills in the questionBox 
//and optionOne,Two,Three,Four with the quizContents objects
var currentQuestion = 0;

//value set to 0 so that we can use the secondsLeft (based off how fast a user finishes the quiz)
var score = 0;

//selecting the timer class in the html file
var timer = document.querySelector(".timer");

//the amount of seconds given to complete the test
var secondsLeft = 60;

//function to start the timer and stop the timer once it reaches 0, then run endQuiz()
function countDown() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
        if(secondsLeft <= 0) 
        {
        clearInterval(timerInterval);
        endQuiz();
        }
    }, 1000);
};

//takes the objects from quizContents and renders them to the html file for the user to see
var renderQuestions = function() {
    questionBox.textContent = quizContents[currentQuestion].question;
    optionOne.textContent = quizContents[currentQuestion].choices[0];
    optionTwo.textContent = quizContents[currentQuestion].choices[1];
    optionThree.textContent = quizContents[currentQuestion].choices[2];
    optionFour.textContent = quizContents[currentQuestion].choices[3];
};

//all the correct answers from quizContents
var correctAnswer = quizContents[currentQuestion].answer;

//lines 93-146 are functions made for when the user clicks one of the multiple choice answers
optionOne.addEventListener("click", function() {
    //if they answer correctly then nothing changes and the next question will appear
    if (this.textContent === correctAnswer) {
    //if they answer incorrectly then they lose 5 seconds from the clock, 
    //and the next question will appear
    } else if (userAnswers !== correctAnswer) {
        secondsLeft = secondsLeft -5;
    }
    currentQuestion++;
    //this is so that the questions don't keep looping
    if (currentQuestion == quizContents.length) {
        endQuiz();
    //this is incase renderQuestions() hasn't gone through all the objects in quizContents
    } else {
        renderQuestions();
    };
});
optionTwo.addEventListener("click", function() {
    if (this.textContent === correctAnswer) {
    } else if (userAnswers !== correctAnswer) {
        secondsLeft = secondsLeft -5;
    }
    currentQuestion++;
    if (currentQuestion == quizContents.length) {
        endQuiz();
    } else {
        renderQuestions();
    };
});
optionThree.addEventListener("click", function() {
    if (this.textContent === correctAnswer) {
    } else if (userAnswers !== correctAnswer) {
        secondsLeft = secondsLeft -5;
    }
    currentQuestion++;
    if (currentQuestion == quizContents.length) {
        endQuiz();
    } else {
        renderQuestions();
    };
});
optionFour.addEventListener("click", function() {
    if (this.textContent === correctAnswer) {
    } else if (userAnswers !== correctAnswer) {
        secondsLeft = secondsLeft -5;
    }
    currentQuestion++;
    if (currentQuestion == quizContents.length) {
        endQuiz();
    } else {
        renderQuestions();
    };
});

//starts the quiz when user clicks the start button- runs countdown() and renderQuestions()
//hides the .content2 elements & makes #quiz-area elements visible
function startQuiz() {
    document.querySelector(".content2").style = "display: none"
    document.querySelector("#quiz-area").style = "display: block"
    countDown();
    renderQuestions();
};

//runs startQuiz() when user clicks the start button
startBtn.addEventListener("click", startQuiz);

//stops the quiz once the user has clicked through all of the questions
function endQuiz() {
    //styling to hide the selected html class and id when the user finishes the quiz
    document.querySelector(".content-header").style = "display: none"
    document.querySelector("#quiz-area").style = "display: none"
    //styling to make the scoreboard elements visible
    document.querySelector("#scoreboard").style = "display: block"
    //local scope score variable- based on how fast the user answers the quiz questions
var score = secondsLeft;
    //selects the username id for when the user types in their username
var initialsEl = document.querySelector("#username");
    //saves initials and score to localStorage
    //replaces the #quiz-area with the scoreboard containing the users name and score
    submitBtn.addEventListener("click", function() {
        highScores.push(initialsEl.value + ": " + score);
    localStorage.setItem("highscores", JSON.stringify(highScores));
        for (let i = 0; i < highScores.length; i++) {
            var li = document.createElement("li")
            li.textContent = highScores[i];
            document.querySelector(".scores").appendChild(li);
            };
    });
};